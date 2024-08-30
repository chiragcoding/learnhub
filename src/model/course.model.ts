// models/Course.ts

import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
	title: string;
	instructor: string;
	rating: number;
	numRatings: number;
	numStudents: number;
	price: number;
	description: string;
	image: string;
	category?: string;
	duration: number; // Duration in hours
	tags: string[]; // Array of tags for filtering
}

const CourseSchema: Schema = new Schema(
	{
		title: { type: String, required: true },
		instructor: { type: String, required: true },
		rating: { type: Number, required: true },
		numRatings: { type: Number, required: true },
		numStudents: { type: Number, required: true },
		price: { type: Number, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		category: { type: String },
		duration: { type: Number, required: true }, // Duration in hours
		tags: { type: [String], default: [] }, // Array of tags
	},
	{ timestamps: true }
);

export default mongoose.models.Course ||
	mongoose.model<ICourse>("Course", CourseSchema);
