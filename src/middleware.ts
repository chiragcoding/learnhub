import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
	"/sign-in",
	"/sign-up",
	"/",
	// Add more public routes here
]);

// Define public API routes that don't require authentication
const isPublicApiRoute = createRouteMatcher([
	"/api/user-data",
	"/api/webhooks/clerk", // Exclude the webhook endpoint here
	// Add more public API routes here
]);

// Middleware function to handle authentication and routing
export default clerkMiddleware((auth, req) => {
	const { userId } = auth();
	const currentUrl = new URL(req.url);
	const isHomePage = currentUrl.pathname === "/"; // Home route is available to all users
	const isApiRequest = currentUrl.pathname.startsWith("/api");

	// Redirect authenticated users to home page if they're on a public route
	if (userId && isPublicRoute(req) && !isHomePage) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	// Handle unauthenticated users
	if (!userId) {
		// Redirect to sign-in page if trying to access a protected route
		if (!isPublicApiRoute(req) && !isPublicRoute(req)) {
			return NextResponse.redirect(new URL("/sign-in", req.url));
		}

		// Redirect to sign-in page if trying to access a protected API route
		if (isApiRequest && !isPublicApiRoute(req)) {
			return NextResponse.redirect(new URL("/sign-in", req.url));
		}
	}

	// Allow the request to proceed
	return NextResponse.next();
});

// Configuration for the middleware
export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Exclude the webhook endpoint and handle all other API routes
		"/((?!api/clerk)(api|trpc)(.*))",
	],
};
