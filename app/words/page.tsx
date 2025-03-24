import DropdownComponent from "@/src/components/DropdownComponent";
import ListUnitComponent from "@/src/components/ListUnitComponent";
import { getUnitWords } from "@/src/services/WordsService";

export default function WordsPage() {
	const units = getUnitWords();

	return (
		<div id="word" className="mx-3 mb-10 App-Content">
			<DropdownComponent />
			<div className="space-y-4">
				{Object.keys(units).map((key, index) => (
					<ListUnitComponent unit={units[key]} title={`Unit ${index + 1}`} key={`unit-${index}`} />
				))}
			</div>
		</div>
	);
}
