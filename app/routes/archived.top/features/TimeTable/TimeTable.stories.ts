import type { Meta, StoryObj } from "@storybook/react";
import type { TimeTable as TTimeTable } from "content-collections";
import { Temporal } from "temporal-polyfill";
import { TimeTable } from "./TimeTable";

type T = typeof TimeTable;

const meta: Meta = {
	component: TimeTable,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "TimeTable",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		curtain: Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 }),
		timetables: [
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "concert.md",
					filePath: "day1/concert.md",
					path: "day1/concert",
				},
				content: "音楽部コンサート",
				day: 1,
				endAt: "2024-11-02T10:15:00[Asia/Tokyo]",
				startAt: "2024-11-02T09:45:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "dance1.md",
					filePath: "day1/dance1.md",
					path: "day1/dance1",
				},
				content: "ダンスバトル①",
				day: 1,
				endAt: "2024-11-02T10:35:00[Asia/Tokyo]",
				startAt: "2024-11-02T10:15:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "dance2.md",
					filePath: "day1/dance2.md",
					path: "day1/dance2",
				},
				content: "ダンスバトル②",
				day: 1,
				endAt: "2024-11-02T11:40:00[Asia/Tokyo]",
				startAt: "2024-11-02T11:20:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "dance3.md",
					filePath: "day1/dance3.md",
					path: "day1/dance3",
				},
				content: "ダンスバトル③",
				day: 1,
				endAt: "2024-11-02T12:45:00[Asia/Tokyo]",
				startAt: "2024-11-02T12:25:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "jankenn.md",
					filePath: "day1/jankenn.md",
					path: "day1/jankenn",
				},
				content: "ジャンボたたいてかぶってじゃんけん",
				day: 1,
				endAt: "2024-11-02T12:10:00[Asia/Tokyo]",
				startAt: "2024-11-02T11:40:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "katsuyama.md",
					filePath: "day1/katsuyama.md",
					path: "day1/katsuyama",
				},
				content: "勝山組よさこいパフォーマンス",
				day: 1,
				endAt: "2024-11-02T11:05:00[Asia/Tokyo]",
				startAt: "2024-11-02T10:50:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "minnhaya.md",
					filePath: "day1/minnhaya.md",
					path: "day1/minnhaya",
				},
				content: "みんはや王",
				day: 1,
				endAt: "2024-11-02T13:25:00[Asia/Tokyo]",
				startAt: "2024-11-02T12:45:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "opening.md",
					filePath: "day1/opening.md",
					path: "day1/opening",
				},
				content: "オープニング",
				day: 1,
				endAt: "2024-11-02T09:45:00[Asia/Tokyo]",
				startAt: "2024-11-02T09:00:00[Asia/Tokyo]",
				type: "main",
			},
			{
				_meta: {
					directory: "day1",
					extension: "md",
					fileName: "vocal1.md",
					filePath: "day1/vocal1.md",
					path: "day1/vocal1",
				},
				content: "VOCAL1 GP",
				day: 1,
				endAt: "2024-11-02T14:45:00[Asia/Tokyo]",
				startAt: "2024-11-02T13:45:00[Asia/Tokyo]",
				type: "main",
			},
		].sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))) as TTimeTable[],
		type: "main",
	},
};

export default meta;
