"use client";

import FeaturedCourses from "@/components/FeaturedCourses";
import SearchBarHero from "@/components/HeroSection";

// Render a YouTube video player
const url =
	"https://res.cloudinary.com/baibhavmalaviya/video/upload/sp_hd/v1/tutorial_videos/vsvkrjdikfisjtcbxu88.m3u8?_a=BAMABkRg0";

export default function Home() {
	return (
		<>
			<SearchBarHero />
			<FeaturedCourses />
		</>
	);
}
