import React from "react";

export default function FooterComponent() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-10">
			<hr className="mb-5" />
			<div className="container mx-auto flex justify-items-center justify-center items-center">
				<span>
					Designed by <strong>Roger Parada</strong> - Powered with&nbsp;
					<a href="https://dictionaryapi.dev" target="_blank" rel="noopener noreferrer" className="HighLink">
						Free Dictionary API
					</a>
					&nbsp;- {year}
				</span>
			</div>
		</footer>
	);
}
