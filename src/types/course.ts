// types/course.ts

export interface Course {
	id: string; // Unique identifier for the course
	title: string;
	instructor: string;
	rating: number;
	numRatings: number;
	numStudents: number;
	price: number;
	description: string;
	image: string;
	duration: number; // Duration in hours
	tags: string[]; // Array of tags for filtering
	category?: string;
}
