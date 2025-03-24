import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/src/components/FooterComponent";

export const metadata: Metadata = {
	title: "Vocabulary B2",
	description: "Vocabulary B2 for class",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<div className="container mx-auto">{children}</div>
				<FooterComponent />
			</body>
		</html>
	);
}
