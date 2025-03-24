"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import DropdownComponent from "./DropdownComponent";
import MeaningsComponent from "./MeaningsComponent";
import PhoneticsComponent from "./PhoneticsComponent";
import { WordResponse } from "../types";
import { getDefinition } from "../services/WordsService";

export default function WordDefinitionComponent() {
	const searchParams = useSearchParams();
	const search = searchParams.get("word") ?? "";
	const [word, setWord] = useState<WordResponse>();

	useEffect(() => {
		if (search) {
			const getData = async () => {
				try {
					const resp = await getDefinition(search);
					setWord(resp);
				} catch (error) {
					console.log(error);
				}
			};
			getData();
		}
	}, [search]);

	if (!word) {
		return (
			<div id="word" className="text-center">
				<DropdownComponent />
				Sorry the word <strong className="capitalize">&quot;{"test"}&quot;</strong> was not found
			</div>
		);
	}

	return (
		<div id="word" className="mt-3">
			<DropdownComponent />

			<div className="m-3">
				<div>
					<span className="title">{word.word}</span>
				</div>
				<div className="flex flex-row mb-3">
					<span className="phonetic my-auto ">{word.phonetic}</span>
					<PhoneticsComponent ph={word.phonetics} />
				</div>
				<MeaningsComponent meanings={word.meanings} />
			</div>
		</div>
	);
}
