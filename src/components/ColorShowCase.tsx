import React from "react";
import Head from "next/head";

const ColorShowcase: React.FC = () => {
	const colors = [
		{ name: "Border", variable: "--border" },
		{ name: "Input", variable: "--input" },
		{ name: "Ring", variable: "--ring" },
		{ name: "Background", variable: "--background" },
		{ name: "Foreground", variable: "--foreground" },
		{ name: "Primary", variable: "--primary" },
		{ name: "Primary Foreground", variable: "--primary-foreground" },
		{ name: "Secondary", variable: "--secondary" },
		{ name: "Secondary Foreground", variable: "--secondary-foreground" },
		{ name: "Destructive", variable: "--destructive" },
		{ name: "Destructive Foreground", variable: "--destructive-foreground" },
		{ name: "Muted", variable: "--muted" },
		{ name: "Muted Foreground", variable: "--muted-foreground" },
		{ name: "Accent", variable: "--accent" },
		{ name: "Accent Foreground", variable: "--accent-foreground" },
		{ name: "Popover", variable: "--popover" },
		{ name: "Popover Foreground", variable: "--popover-foreground" },
		{ name: "Card", variable: "--card" },
		{ name: "Card Foreground", variable: "--card-foreground" },
	];

	return (
		<div className="min-h-screen bg-background text-foreground p-8">
			<Head>
				<title>Color Showcase</title>
				<meta name="description" content="Showcase of our color palette" />
			</Head>

			<main>
				<h1 className="text-4xl font-bold mb-8">Color Showcase</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{colors.map((color) => (
						<div
							key={color.variable}
							className="bg-card rounded-lg shadow-md overflow-hidden"
						>
							<div
								className="h-32"
								style={{ backgroundColor: `hsl(var(${color.variable}))` }}
							></div>
							<div className="p-4">
								<h2 className="text-lg font-semibold">{color.name}</h2>
								<p className="text-sm text-muted-foreground">{`hsl(var(${color.variable}))`}</p>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default ColorShowcase;
