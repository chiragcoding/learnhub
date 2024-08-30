import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Head>
				<title>Creative Arts Hub</title>
				<meta
					name="description"
					content="An Inspiring Space for Artistic Expression"
				/>
			</Head>

			{/* Header */}
			<header className="bg-primary text-primary-foreground py-5 shadow-lg">
				<div className="container mx-auto px-6">
					<nav className="flex justify-between items-center">
						<h1 className="text-4xl font-extrabold">Creative Arts Hub</h1>
						<ul className="flex space-x-8">
							<li>
								<a href="#" className="hover:text-accent transition-colors">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-accent transition-colors">
									Events
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-accent transition-colors">
									Membership
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-accent transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<main>
				<section className="py-32 bg-gradient-to-b from-primary to-secondary text-center">
					<div className="container mx-auto px-6">
						<h2 className="text-6xl md:text-8xl font-extrabold mb-8 text-primary-foreground">
							Unleash Your Creativity
						</h2>
						<p className="text-xl mb-10 max-w-3xl mx-auto text-muted-foreground">
							Dive into a world of artistic innovation and expression. Join our
							community and explore new dimensions of creativity.
						</p>
						<button className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent/80 transition-colors">
							Explore Now
						</button>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 bg-surface">
					<div className="container mx-auto px-6">
						<h3 className="text-4xl font-bold text-center mb-12 text-primary">
							What We Offer
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							<div className="bg-card p-8 rounded-lg shadow-xl hover:bg-popover transition-colors">
								<h4 className="text-3xl font-semibold mb-4 text-accent">
									Art Workshops
								</h4>
								<p className="text-surface-foreground mb-6">
									Discover new techniques and express your creativity through
									our diverse range of workshops.
								</p>
								<a
									href="#"
									className="text-primary hover:text-accent-foreground transition-colors"
								>
									Learn More →
								</a>
							</div>
							<div className="bg-card p-8 rounded-lg shadow-xl hover:bg-popover transition-colors">
								<h4 className="text-3xl font-semibold mb-4 text-accent">
									Exhibitions
								</h4>
								<p className="text-surface-foreground mb-6">
									Experience the vibrant works of emerging and established
									artists at our exclusive exhibitions.
								</p>
								<a
									href="#"
									className="text-primary hover:text-accent-foreground transition-colors"
								>
									Learn More →
								</a>
							</div>
							<div className="bg-card p-8 rounded-lg shadow-xl hover:bg-popover transition-colors">
								<h4 className="text-3xl font-semibold mb-4 text-accent">
									Creative Events
								</h4>
								<p className="text-surface-foreground mb-6">
									Participate in engaging and thought-provoking events that
									celebrate artistic expression.
								</p>
								<a
									href="#"
									className="text-primary hover:text-accent-foreground transition-colors"
								>
									Learn More →
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Membership Section */}
				<section className="py-20 bg-background">
					<div className="container mx-auto px-6 text-center">
						<h3 className="text-4xl font-bold mb-8 text-primary">
							Join Our Community
						</h3>
						<p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
							Be part of a thriving community of artists and creators. Sign up
							to get exclusive updates and opportunities.
						</p>
						<form className="max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full px-5 py-3 mb-6 bg-input text-foreground border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
							/>
							<button
								type="submit"
								className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors"
							>
								Sign Up
							</button>
						</form>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-20 bg-primary text-primary-foreground">
					<div className="container mx-auto px-6">
						<h3 className="text-4xl font-bold text-center mb-12 text-accent">
							What Our Members Say
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							<div className="p-8 rounded-lg shadow-xl bg-secondary text-secondary-foreground">
								<p className="text-lg italic mb-5">
									"Being part of Creative Arts Hub has opened up new artistic
									horizons for me. It's a vibrant and inspiring space!"
								</p>
								<h4 className="text-xl font-semibold">- Alex, Artist</h4>
							</div>
							<div className="p-8 rounded-lg shadow-xl bg-secondary text-secondary-foreground">
								<p className="text-lg italic mb-5">
									"The workshops and events here are top-notch. I've learned so
									much and met incredible people."
								</p>
								<h4 className="text-xl font-semibold">- Jamie, Designer</h4>
							</div>
							<div className="p-8 rounded-lg shadow-xl bg-secondary text-secondary-foreground">
								<p className="text-lg italic mb-5">
									"The sense of community and support at Creative Arts Hub is
									unmatched. It has truly enhanced my creative journey."
								</p>
								<h4 className="text-xl font-semibold">- Taylor, Sculptor</h4>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-muted text-muted-foreground py-6">
				<div className="container mx-auto px-6 text-center">
					<p>&copy; 2024 Creative Arts Hub. All rights reserved.</p>
					<div className="mt-4">
						<a
							href="#"
							className="text-primary hover:text-accent mx-3 transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-primary hover:text-accent mx-3 transition-colors"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="text-primary hover:text-accent mx-3 transition-colors"
						>
							Contact Us
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
