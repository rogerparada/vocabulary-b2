import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchBarProps = {
	onChange: (value: string) => void;
};

export default function SearchBar({ onChange }: SearchBarProps) {
	return (
		<div className="text-3xl">
			<FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="w-10 h-10" />
			<span className="ml-3">Search:</span>
			<input
				type="text"
				name=""
				id=""
				className="border-2 border-gray-400 ml-3 rounded-md h-12"
				placeholder="Please type a word."
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</div>
	);
}
