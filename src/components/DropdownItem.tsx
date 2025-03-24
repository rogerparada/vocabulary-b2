"use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type DropdownItemProps = {
	text: string;
	icon: IconProp;
	destination: string;
};

export default function DropdownItem({ text, icon, destination }: DropdownItemProps) {
	return (
		<li className="dropdown-item text-base md:text-lg flex justify-start align-middle">
			<FontAwesomeIcon icon={icon} />
			<Link href={destination} className=" hover:font-bold">
				{text}
			</Link>
		</li>
	);
}
