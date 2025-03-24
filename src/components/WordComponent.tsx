import { getDefinition } from "../services/WordsService";
import MeaningsComponent from "./MeaningsComponent";
import DropdownComponent from "./DropdownComponent";
import PhoneticsComponent from "./PhoneticsComponent";

type WordComponentProps = {
	newWord: string;
};

export default async function WordComponent({ newWord }: WordComponentProps) {
	try {
		const definition = await getDefinition(newWord);
		if (definition) {
			const { word, phonetic, phonetics, meanings } = definition;

			return (
				<div id="word" className="relative">
					<DropdownComponent />
					<div>
						<span className="title">{word}</span>
					</div>
					<div className="flex flex-row mb-3">
						<span className="phonetic my-auto">{phonetic}</span>
						<PhoneticsComponent ph={phonetics} />
					</div>
					<MeaningsComponent meanings={meanings} singleItem />
				</div>
			);
		}
	} catch (error) {
		console.log("Word definition", error);
		return (
			<div id="word" className="text-center">
				<DropdownComponent />
				Sorry the word <strong className="capitalize">&quot;{newWord}&quot;</strong> was not found
			</div>
		);
	}
}
