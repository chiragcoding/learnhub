import React from "react";
import Section from "./myComponents/Section";
import { sampleCourses } from "@/data/courses";
import CourseCard from "./myComponents/CourseCard";

function FeaturedCourses() {
	return (
		<Section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 container bg-background">
			{sampleCourses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</Section>
	);
}

export default FeaturedCourses;
