"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "@/src/hooks/useDebounce";
import { getDefinition } from "@/src/services/WordsService";
import DropdownComponent from "@/src/components/DropdownComponent";
import PhoneticsComponent from "@/src/components/PhoneticsComponent";
import MeaningsComponent from "@/src/components/MeaningsComponent";
import { WordResponse } from "@/src/types";
import SearchBar from "@/src/components/SearchBar";

export default function SearchPage() {
	const [search, setSearch] = useState("");
	const [word, setWord] = useState<WordResponse>();
	const [loading, setLoading] = useState(false);
	const debounceSearch = useDebounce(search);

	const onChangeSearch = (value: string) => {
		setLoading(true);
		setSearch(value);
	};

	useEffect(() => {
		const loadData = async () => {
			try {
				const newWord = await getDefinition(debounceSearch);
				if (newWord) setWord(newWord);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
				setWord(undefined);
			}
		};

		loadData();
	}, [debounceSearch]);

	return (
		<div className="App-Content">
			<div className="main">
				<DropdownComponent />
				<SearchBar onChange={onChangeSearch} />
				{loading && <div className="text-5xl text-center my-16 font-bold">Loading...</div>}
				{word && !loading && (
					<div className="mt-3">
						<hr className="border border-slate-600 mt-5" />
						<div className="m-3">
							<div>
								<span className="title">{word.word}</span>
							</div>
							<div className="flex flex-row mb-3">
								<span className="phonetic my-auto ">{word?.phonetic}</span>
								<PhoneticsComponent ph={word.phonetics} />
							</div>
							<MeaningsComponent meanings={word.meanings} />
						</div>
					</div>
				)}
				{!word && !loading && search && (
					<div className="text-center my-10">
						Sorry the word <strong className="capitalize">&quot;{search}&quot;</strong> was not found
					</div>
				)}
			</div>
		</div>
	);
}
