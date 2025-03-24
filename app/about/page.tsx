import Link from "next/link";
import DropdownComponent from "@/src/components/DropdownComponent";

export default function AboutComponent() {
	return (
		<div className="App-Content">
			<div className="main min-h-[400px] flex items-center justify-center flex-col mt-10">
				<DropdownComponent />
				<div className="w-full flex justify-center text-2xl">
					<p>This web is for educational purposes and is an easy way to keep me learning English. To build this web I&apos;ve used:</p>
				</div>

				<div className="flex flex-wrap justify-center gap-10 mt-10">
					<div className="">
						<Link href="https://reactjs.org/" target="blank" className="font-bold text-3xl hover:text-sky-500 transition-colors duration-300">
							React
						</Link>
					</div>
					<div className="">
						<Link href="https://dictionaryapi.dev/" target="blank" className="font-bold text-3xl hover:text-amber-400 transition-colors duration-300">
							Free Dictionary API
						</Link>
					</div>
					<div className="">
						<Link href="https://github.com" target="blank" className="font-bold text-3xl hover:text-fuchsia-900 transition-colors duration-300">
							GitHub
						</Link>
					</div>
					<div className="">
						<Link href="https://render.com" target="blank" className="font-bold text-3xl hover:text-green-700 transition-colors duration-300">
							Render
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
