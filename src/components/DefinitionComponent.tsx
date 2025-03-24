import SpoilerComponent from "./SpoilerComponent";
import { Meaning } from "../types";

function DefinitionComponent({ item }: { item: Meaning }) {
	return (
		<div className="">
			<strong className="text-2xl">Part of Speech:</strong> <span className="text-2xl">{`(${item.partOfSpeech})`}</span>{" "}
			<ul className="Speech">
				{item.definitions.map((element, index) => {
					return (
						<li key={`def${item}${index}`}>
							{element.definition}
							<span>{element.example ? `(e.g. ${element.example})` : ""}</span>
						</li>
					);
				})}
			</ul>
			<SpoilerComponent desc="Antonyms" list={item.antonyms} />
			<SpoilerComponent desc="Synonyms" list={item.synonyms} />
		</div>
	);
}

export default DefinitionComponent;
