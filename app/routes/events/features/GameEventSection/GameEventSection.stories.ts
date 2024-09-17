import type { Meta, StoryObj } from "@storybook/react";

import { GameEventSection } from "./GameEventSection";

type T = typeof GameEventSection;

const meta: Meta = {
	component: GameEventSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "GameEventSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		gameEvents: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "splatoon.md",
					filePath: "splatoon.md",
					path: "splatoon",
				},
				content: "",
				date: "2024-11-02T09:30:00[Asia/Tokyo]",
				day: 1,
				form: "https://forms.gle/7ncWTiUtc3hrxHMM9",
				guideBook: "https://drive.google.com/file/d/1q8A4Yun1JzVys2Ia35dwgN5rw3JW-Gs8/view?usp=sharing",
				title: "スプラトゥーン3",
				venue: "第3合併講義室",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "ssbu.md",
					filePath: "ssbu.md",
					path: "ssbu",
				},
				content: "",
				date: "2024-11-03T09:30:00[Asia/Tokyo]",
				day: 2,
				form: "https://forms.gle/M8vTM2FoGBxCGK1G7",
				guideBook: "https://drive.google.com/file/d/1U-bQKD0zUK2f2zh855EYH18UnLSJp_gS/view?usp=drive_link",
				title: "大乱闘スマッシュブラザーズ SPECIAL",
				venue: "第3合併講義室",
			},
		],
	},
};

export default meta;
