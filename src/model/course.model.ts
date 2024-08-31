import mongoose from "mongoose";

const { Schema } = mongoose;

// Create a schema for course content sections
const SectionSchema = new Schema({
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

// Create a schema for course reviews
const ReviewSchema = new Schema({
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Create the main course schema
const CourseSchema = new Schema(
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
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		sections: [SectionSchema],
		reviews: [ReviewSchema],
		enrollmentCount: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
