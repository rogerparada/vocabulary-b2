import Link from "next/link";

type ListItemComponentProps = {
	word: string;
};

function ListItemComponent({ word }: ListItemComponentProps) {
	return (
		<div>
			<Link className="capitalize text-lg md:text-3xl font-thin" href={`/definition?word=${word}`}>
				{word}
			</Link>
		</div>
	);
}

export default ListItemComponent;
