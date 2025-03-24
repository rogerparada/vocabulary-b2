import { WordInfoComponent } from "@/src/components/WordInfoComponent";

export default function DefinitionPage({ params }: { params: { word: string } }) {
	const word = params.word ?? "";

	if (!word) return <div className="App-Content">Loading</div>;
	return (
		<div className="App-Content">
			<WordInfoComponent search={word} />
		</div>
	);
}
