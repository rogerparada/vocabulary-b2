import ListItemComponent from "./ListItemComponent";

type ListUnitComponentProps = {
	title: string;
	unit: string[];
};

export default function ListUnitComponent({ title, unit }: ListUnitComponentProps) {
	return (
		<div>
			<div className="flex flex-row mt-5">
				<h1 className="text-3xl font-bold">{title}</h1>
			</div>
			<hr className="mb-5" />
			<div className="flex flex-wrap justify-center gap-5">
				{unit.map((item, index) => {
					return <ListItemComponent word={item} key={index} />;
				})}
			</div>
		</div>
	);
}
