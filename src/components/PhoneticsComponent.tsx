import { Phonetic } from "../types";
import AudioComponent from "./AudioComponent";

type PhoneticsComponentProps = {
	ph: Phonetic[];
};

function PhoneticsComponent({ ph }: PhoneticsComponentProps) {
	if (Array.isArray(ph)) {
		return (
			<div className="phonetics flex flex-row justify-center">
				{ph.map((item, index) => (
					<AudioComponent newAudio={item.audio} lang={item.lang ?? "En"} key={`ph${index}`} />
				))}
			</div>
		);
	}
}

export default PhoneticsComponent;
