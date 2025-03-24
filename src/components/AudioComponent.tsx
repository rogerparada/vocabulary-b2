"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "@/src/assets/css/AudioComponent.css";

type AudioComponentProps = {
	newAudio: string;
	lang: string;
};

function AudioComponent({ newAudio, lang }: AudioComponentProps) {
	function playAudio(pAudio: string) {
		console.log(pAudio);
		const audio = new Audio(pAudio);
		audio.play();
	}

	return (
		<button onClick={() => playAudio(newAudio)} className="flex flex-col text-xs md:text-base mx-3">
			<span className=" capitalize">{lang}</span>
			<FontAwesomeIcon icon={faVolumeHigh} />
		</button>
	);
}

export default AudioComponent;
