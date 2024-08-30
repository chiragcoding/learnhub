import React from "react";
import Image from "next/image";
import { Course } from "@/types/course";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { Button } from "../ui/button";

interface CourseCardProps {
	course: Course;
}

// Helper function to render star ratings
const getStarRating = (rating: number) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex items-center">
			{/* Render full stars */}
			{Array.from({ length: fullStars }).map((_, index) => (
				<Star
					key={`full-${index}`}
					fill="#facc15"
					className="w-4 h-4 text-yellow-500"
				/>
			))}
			{/* Render half star */}
			{hasHalfStar && (
				<Star
					key="half"
					className="w-4 h-4 text-yellow-500"
					style={{ clipPath: "inset(0 50% 0 0)" }}
				/>
			)}
			{/* Render empty stars */}
			{Array.from({ length: emptyStars }).map((_, index) => (
				<Star key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
			))}
		</div>
	);
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
	return (
		<Card className="flex flex-col bg-background w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
			<div className="relative w-full h-48">
				<Image
					src={course.image}
					alt={course.title}
					layout="fill"
					objectFit="cover"
					className="transition-transform duration-300 hover:scale-105"
				/>
				<Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
					${course.price.toFixed(2)}
				</Badge>
			</div>
			<CardContent className="flex-1 p-4">
				<h3 className="font-serif text-2xl font-bold mb-2 text-primary">
					{course.title}
				</h3>
				<p className="text-sm text-muted-foreground mb-2">
					by {course.instructor}
				</p>
				<div className="flex items-center space-x-4 text-sm mb-3">
					<div className="flex items-center">
						<Clock className="w-4 h-4 mr-1" />
						<span>{course.duration}h</span>
					</div>
					<div className="flex items-center space-x-1">
						{getStarRating(course.rating)}
						<span className="ml-1 text-sm text-foreground">
							{course.rating.toFixed(1)} ({course.numRatings})
						</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Button className="w-full">Enroll Now</Button>
			</CardFooter>
		</Card>
	);
};

export default CourseCard;
