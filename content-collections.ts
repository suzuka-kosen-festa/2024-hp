import { defineCollection, defineConfig } from "@content-collections/core";
import { Temporal } from "temporal-polyfill";

const stageEvent = defineCollection({
	directory: "contents/stage_event",
	include: "**/*.md",
	name: "stageEvent",
	schema: z => ({
		endAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"endAt\" must be a valid Temporal.ZonedDateTime." }),
		overview: z.string().max(100, { message: "Value of \"overview\" must be less than 100 characters." }),
		startAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"startAt\" must be a valid Temporal.ZonedDateTime." }),
		title: z.string(),
	}),
});

const liveEvent = defineCollection({
	directory: "contents/live_event",
	include: "**/*.md",
	name: "liveEvent",
	schema: z => ({
		endAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"endAt\" must be a valid Temporal.ZonedDateTime." }),
		name: z.string().max(20, { message: "Value of \"name\" must be less than 20 characters." }),
		overview: z.string().max(100, { message: "Value of \"overview\" must be less than 100 characters." }),
		press: z.string().refine((v) => {
			if (/^\/images\/.*/.test(v))
				return true;
			else
				return false;
		}, { message: "Value of \"press\" must be a valid image URL." }),
		stage: z.union([z.literal("main"), z.literal("sub")]),
		startAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"startAt\" must be a valid Temporal.ZonedDateTime." }),
	}),
});

const gameEvent = defineCollection({
	directory: "contents/game_event",
	include: "**/*.md",
	name: "gameEvent",
	schema: z => ({
		date: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"date\" must be a valid Temporal.ZonedDateTime." }),
		day: z.union([z.literal(1), z.literal(2)]),
		form: z.string().url({ message: "Value of \"form\" must be a valid URL." }),
		guideBook: z.string().url({ message: "Value of \"guideBook\" must be a valid URL." }),
		title: z.string(),
		venue: z.string(),
	}),
});

export default defineConfig({
	collections: [
		stageEvent,
		liveEvent,
		gameEvent,
	],
});
