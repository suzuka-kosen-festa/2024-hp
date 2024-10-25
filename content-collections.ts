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

const sponsor = defineCollection({
	directory: "contents/sponsor",
	include: "**/*.md",
	name: "sponsor",
	schema: z => ({
		name: z.string(),
	}),
});

const special_sponsor = defineCollection({
	directory: "contents/special_sponsor",
	include: "**/*.md",
	name: "specialSponsor",

	schema: z => ({
		description: z.string(),
		images: z.array(z.string().refine((v) => {
			if (/^\/images\/.*/.test(v))
				return true;
			else
				return false;
		}, { message: "Value of \"img\" must be a valid image URL." })),
		name: z.string(),
		tel: z.string(),
	}),
});

const personal_sponsor = defineCollection({
	directory: "contents/personal_sponsor",
	include: "**/*.md",
	name: "personalSponsor",
	schema: z => ({
		name: z.string(),
	}),
});

const departmentExhibition = defineCollection({
	directory: "contents/department_exhibition",
	include: "**/*.md",
	name: "departmentExhibition",
	schema: z => ({
		department: z.union([z.literal("M"), z.literal("E"), z.literal("I"), z.literal("C"), z.literal("S")]),
		overview: z.string().max(60, { message: "Value of \"overview\" must be less than 60 characters." }),
		team: z.string(),
	}),
});

const bazar = defineCollection({
	directory: "contents/bazar",
	include: "**/*.md",
	name: "bazar",
	schema: z => ({
		img: z.string().refine((v) => {
			if (/^\/images\/.*/.test(v))
				return true;
			else
				return false;
		}, { message: "Value of \"img\" must be a valid image URL." }),
		name: z.string(),
		overview: z.string(),
		type: z.union([z.literal("food"), z.literal("recreation")]),
	}),
});

const timeTable = defineCollection({
	directory: "contents/time_table",
	include: "**/*.md",
	name: "timeTable",
	schema: z => ({
		day: z.union([z.literal(1), z.literal(2)]),
		endAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"endAt\" must be a valid Temporal.ZonedDateTime." }),
		startAt: z.string().refine((v) => {
			try {
				Temporal.ZonedDateTime.from(v);

				return true;
			}
			catch {
				return false;
			}
		}, { message: "Value of \"startAt\" must be a valid Temporal.ZonedDateTime." }),
		type: z.union([z.literal("game"), z.literal("live"), z.literal("main"), z.literal("sub")]),
	}),
});

export default defineConfig({
	collections: [
		stageEvent,
		liveEvent,
		gameEvent,
		sponsor,
		special_sponsor,
		personal_sponsor,
		departmentExhibition,
		bazar,
		timeTable,
	],
});
