import Link from "next/link";
type SpoilerComponentProps = {
	desc: string;
	list: string[];
};

function SpoilerComponent({ desc, list }: SpoilerComponentProps) {
	if (list && list?.length > 0) {
		const regex = /[.=*+?^${}()\s|[0-9]/g;
		return (
			<details className="spoiler">
				<summary>{desc}</summary>

				<ul>
					{list.map((item, index) => (
						<li key={`${desc}${index}`}>
							{item.match(regex) === null ? <Link href={`/definition/${item}`}>{item}</Link> : <span className="no-link">{item}</span>}
						</li>
					))}
				</ul>
			</details>
		);
	}
}

export default SpoilerComponent;
