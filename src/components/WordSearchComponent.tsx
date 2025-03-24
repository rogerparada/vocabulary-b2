"use client";
import PhoneticsComponent from "./PhoneticsComponent";
import MeaningsComponent from "./MeaningsComponent";
import { getDefinition } from "../services/WordsService";
import { useEffect, useState } from "react";
import { WordResponse } from "../types";
import { useDebounce } from "../hooks/useDebounce";

type WordSearchComponentProps = {
	search: string;
};

const WordSearchComponent = ({ search }: WordSearchComponentProps) => {
	const [word, setWord] = useState<WordResponse>({ word: "", phonetic: "", phonetics: [], meanings: [] });
	const [error, setError] = useState(false);

	const debounceSearch = useDebounce(search, 1000);

	useEffect(() => {
		const loadData = async () => {
			try {
				const newWord = await getDefinition(debounceSearch);
				if (newWord) setWord(newWord);
			} catch (e) {
				console.log(e);
				setError(true);
			}
		};

		loadData();
	}, [search, debounceSearch]);

	if (error)
		return (
			<div className="text-center">
				<hr />
				Sorry the word <strong className="capitalize">&quot;{search}&quot;</strong> was not found
			</div>
		);

	return (
		<div className="mt-3">
			<hr />
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
};

export default WordSearchComponent;
