import { getDefinition } from "../services/WordsService";
import PhoneticsComponent from "./PhoneticsComponent";
import MeaningsComponent from "./MeaningsComponent";
import DropdownComponent from "./DropdownComponent";

type WordInfoComponentProps = {
	search: string;
};

export async function WordInfoComponent({ search }: WordInfoComponentProps) {
	const word = await getDefinition(search);

	if (!word) {
		return (
			<div id="word" className="text-center">
				<DropdownComponent />
				Sorry the word <strong className="capitalize">&quot;{search}&quot;</strong> was not found
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
