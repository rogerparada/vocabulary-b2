import ListItemComponent from "@/src/components/ListItemComponent";
import WordComponent from "@/src/components/WordComponent";
import { getUnitWordsByUnit } from "@/src/services/WordsService";

export default function Home() {
	const randomUnit = Math.floor(Math.random() * 9) + 1;
	const flip = Math.round(Math.random());
	const words = getUnitWordsByUnit(randomUnit).slice(flip ? 0 : 10, flip ? 10 : 20);

	return (
		<div className="App-Content container mx-auto">
			<div className="list">
				<WordComponent newWord={"Vocabulary"} />
				<p className="mt-10 mx-3 font-bold">Some words:</p>
				<div className="flex flex-wrap gap-3 mx-3 mb-10 md:mb-3">
					{words.map((item, index) => (
						<ListItemComponent word={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
