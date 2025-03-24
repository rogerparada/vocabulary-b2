import WordDefinitionComponent from "@/src/components/WordDefinitionComponent";
import { Suspense } from "react";

export default function DefinitionPage() {
	return (
		<Suspense>
			<div className="App-Content">
				<WordDefinitionComponent />
			</div>
		</Suspense>
	);
}
