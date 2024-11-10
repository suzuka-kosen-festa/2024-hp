import type { Meta, StoryObj } from "@storybook/react";

import { LiveEventSection } from "./LiveEventSection";

type T = typeof LiveEventSection;

const meta: Meta = {
	component: LiveEventSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "LiveEventSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		liveEvents: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "alus_tale.md",
					filePath: "alus_tale.md",
					path: "alus_tale",
				},
				content: "",
				endAt: "2024-11-02T11:45:00[Asia/Tokyo]",
				name: "Alus Tale",
				overview: "存在しないものを自分たちの力で意味のあるものに。",
				press: "/images/alus_tale.webp",
				stage: "sub",
				startAt: "2024-11-02T11:30:00[Asia/Tokyo]",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "curious.md",
					filePath: "curious.md",
					path: "curious",
				},
				content: "",
				endAt: "2024-11-03T11:20:00[Asia/Tokyo]",
				name: "Curious",
				overview: "「今を全力で楽しむ」をモットーに、みなさんにエネルギーと感動を与え、心に残る瞬間を作りだせるよう頑張ります！マカえん、ハルカミライ、backnumberとかやります！是非聴きに来てください！",
				press: "/images/curious.webp",
				stage: "main",
				startAt: "2024-11-03T10:50:00[Asia/Tokyo]",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "eitisanjuu.md",
					filePath: "eitisanjuu.md",
					path: "eitisanjuu",
				},
				content: "",
				endAt: "2024-11-02T13:20:00[Asia/Tokyo]",
				name: "エイチサンジュウ",
				overview: "俺達と学園少年少女の身勝手的BABY革命",
				press: "/images/eitisanjuu.webp",
				stage: "main",
				startAt: "2024-11-02T12:50:00[Asia/Tokyo]",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "em.md",
					filePath: "em.md",
					path: "em",
				},
				content: "",
				endAt: "2024-11-02T12:45:00[Asia/Tokyo]",
				name: "e/m",
				overview: "e/mです！1番楽しんで演奏するのでぜひ見に来てください！",
				press: "/images/em.webp",
				stage: "sub",
				startAt: "2024-11-02T12:30:00[Asia/Tokyo]",
			},
		],
	},
};

export default meta;
