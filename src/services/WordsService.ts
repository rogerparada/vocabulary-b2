import { APIResponse, Meaning, Phonetic, WordResponse } from "../types";

import data from "@/data/db.json";

export function getUnitWords(): { [unit: string]: string[] } {
	return data.words.reduce((result, current) => {
		const gk = current.u;
		if (!result[gk]) {
			result[gk] = [];
		}

		result[gk].push(current.word);

		return result;
	}, {} as { [unit: string]: string[] });
}

export function getUnitWordsByUnit(unit = 1): string[] {
	return data.words
		.sort()
		.filter((x) => x.u === unit)
		.map((w) => w.word);
}

export async function getDefinition(newWord: string): Promise<WordResponse | undefined> {
	try {
		const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;

		const res = await fetch(API_URL);
		const response = await res.json();

		if (Array.isArray(response)) {
			if (response.length >= 1) {
				const result = processDeFinitionArray(response);
				return result;
			}
		} else {
			return Promise.reject(`Error loading word ${newWord}`);
		}
	} catch (error) {
		return Promise.reject(`Error loading word ${newWord}\n${error}`);
	}
}

function processDeFinitionArray(defArray: APIResponse[]) {
	let word = "";
	let phonetic = "";
	let meanings: Meaning[] = [];
	let phonetics: Phonetic[] = [];

	try {
		defArray.forEach((item) => {
			word = item.word ? item.word : word;
			phonetic = item.phonetic ? item.phonetic : phonetic;
			if (Array.isArray(item.phonetics)) {
				//phonetics = processPhonetics(item.phonetics, phonetics);
				const ph = processPhonetics(item.phonetics);
				phonetics = Array.from(new Map([...phonetics, ...ph].map((p) => [p.lang, p])).values());
			}
			if (Array.isArray(item.meanings)) {
				meanings = [...meanings, ...item.meanings];
			}
		});

		return {
			word,
			phonetic,
			meanings,
			phonetics,
		};
	} catch (error) {
		console.log("Error", error);
	}
}

export function processPhonetics(pArray: Phonetic[]) {
	const phonetics: Phonetic[] = pArray
		.filter((p) => p.audio !== "")
		.map((p) => {
			const lang = p.audio.split("/").slice(-1).toString().replace(".", "-").split("-")[1];
			return { ...p, lang };
		});

	return phonetics;
}

export function processMeaning(meaningsArray: Meaning[]) {
	const meanings: Meaning[] = [];

	meaningsArray.forEach((item) => {
		meanings.push(item);
	});
	return meanings;
}
