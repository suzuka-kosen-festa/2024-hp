import type { Meta, StoryObj } from "@storybook/react";

import { Temporal } from "temporal-polyfill";
import { TimeTableItem } from "./TimeTableItem";

type T = typeof TimeTableItem;

const meta: Meta = {
	component: TimeTableItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "TimeTableItem",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		curtain: Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 }),
		timetable: {
			_meta: {
				directory: "hoge",
				extension: "hoge",
				fileName: "hoge",
				filePath: "hoge",
				path: "hoge",
			},
			content: "content sample",
			endAt: Temporal.ZonedDateTime.from({ day: 2, hour: 10, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 }).toString(),
			startAt: Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 30, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 }).toString(),
			type: "game",
		},
	},
};

export const Now: Story = {
	args: {
		curtain: Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo")).subtract({ hours: 2 }),
		timetable: {
			_meta: {
				directory: "hoge",
				extension: "hoge",
				fileName: "hoge",
				filePath: "hoge",
				path: "hoge",
			},
			content: "content sample",
			endAt: Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo")).add({ hours: 1 }).toString(),
			startAt: Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo")).subtract({ hours: 1 }).toString(),
			type: "game",
		},
	},
};

export default meta;
