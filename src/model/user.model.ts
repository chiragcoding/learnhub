import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		clerkUserId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["student", "creator", "admin"],
			default: "student",
			required: true,
		},
		profileImage: {
			type: String,
		},

		enrolledCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
		createdCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
