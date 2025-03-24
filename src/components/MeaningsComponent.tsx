import React from "react";

import DefinitionComponent from "./DefinitionComponent";
import { Meaning } from "../types";

type MeaningsComponentProps = {
	meanings: Meaning[];
	singleItem?: boolean;
};

function MeaningsComponent({ meanings, singleItem }: MeaningsComponentProps) {
	if (singleItem) return <DefinitionComponent item={meanings[0]} />;

	return (
		<div id="meanings">
			{meanings.map((item, index) => {
				return <DefinitionComponent item={item} key={`meaning${index}`} />;
			})}
		</div>
	);
}

export default MeaningsComponent;
