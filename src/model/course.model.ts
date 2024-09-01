import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for lessons within a section
interface ILesson {
	title: string;
	content: string;
	videoUrl?: string; // Optional field
	duration?: number; // Optional field in minutes
}

// Define the interface for a section, extending Mongoose's Document
interface ISection extends Document {
	title: string;
	lessons: ILesson[];
}

// Create a schema for sections
const SectionSchema: Schema<ISection> = new Schema({
	title: {
		type: String,
		required: true,
	},
	lessons: [
		{
			title: {
				type: String,
				required: true,
			},
			content: {
				type: String,
				required: true,
			},
			videoUrl: {
				type: String,
				required: false, // Optional if there's no video
			},
			duration: {
				type: Number,
				required: false, // Optional, in minutes
			},
		},
	],
});

// Define the interface for a review
interface IReview extends Document {
	studentId: mongoose.Types.ObjectId;
	rating: number;
	comment?: string; // Optional field
	createdAt: Date;
	updatedAt: Date;
}

// Create a schema for course reviews
const ReviewSchema: Schema<IReview> = new Schema(
	{
		studentId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
		comment: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

// Define the interface for a course, extending Mongoose's Document
export interface ICourse extends Document {
	title: string;
	description: string;
	category: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	price: number;
	language: string;
	thumbnailUrl?: string; // Optional field
	tutorId: mongoose.Types.ObjectId;
	sections: ISection[];
	reviews: IReview[];
	enrollmentCount: number;
	createdAt: Date;
	updatedAt: Date;
}

// Create the main course schema
const CourseSchema: Schema<ICourse> = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		level: {
			type: String,
			enum: ["Beginner", "Intermediate", "Advanced"],
			default: "Beginner",
		},
		price: {
			type: Number,
			required: true,
		},
		language: {
			type: String,
			required: true,
			default: "English",
		},
		thumbnailUrl: {
			type: String,
			required: false,
		},
		tutorId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		sections: [SectionSchema], // Array of sections
		reviews: [ReviewSchema], // Array of reviews
		enrollmentCount: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

// Export the Course model
const Course: Model<ICourse> =
	mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);
export default Course;
