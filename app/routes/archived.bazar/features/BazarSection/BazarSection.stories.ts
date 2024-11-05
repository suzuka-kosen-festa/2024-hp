import type { Meta, StoryObj } from "@storybook/react";

import { BazarSection } from "./BazarSection";

type T = typeof BazarSection;

const meta: Meta = {
	component: BazarSection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "BazarSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		foods: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "108.md",
					filePath: "108.md",
					path: "108",
				},
				content: "",
				img: "/images/bazar/108.webp",
				name: "5C1",
				overview: "最近、寒くなってきましたよね。そんなあなたに、心も身体も温まる、ぽかぽかおでんを御用意しております。",
				type: "food",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "109.md",
					filePath: "109.md",
					path: "109",
				},
				content: "",
				img: "/images/bazar/109.webp",
				name: "5C2",
				overview: "屋台でイカ焼きを提供します。大きめサイズのイカを鉄板で焼きます！香りと絶品の味をお楽しみください。",
				type: "food",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "110.md",
					filePath: "110.md",
					path: "110",
				},
				content: "",
				img: "/images/bazar/110.webp",
				name: "5S1",
				overview: "1度食べたらやみつきになる、屋台で人気のたませんを提供します！ぜひ食べに来てください！",
				type: "food",
			},
		],
		recreations: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "011.md",
					filePath: "011.md",
					path: "011",
				},
				content: "",
				img: "/images/bazar/011.webp",
				name: "水泳部",
				overview: "高得点目指して射的＆輪投げ！豪華景品も...?!",
				type: "recreation",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "012.md",
					filePath: "012.md",
					path: "012",
				},
				content: "",
				img: "/images/bazar/012.webp",
				name: "生物同好会",
				overview: "草花の香りの抽出液、魚の透明標本、葉脈標本など部員たちがやってきた活動の集大成をぜひご覧ください！",
				type: "recreation",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "013.md",
					filePath: "013.md",
					path: "013",
				},
				content: "",
				img: "/images/bazar/013.webp",
				name: "写真部",
				overview: "部員による写真を展示します！気に入った写真の販売もあります！まずはぜひ来て、見てください！",
				type: "recreation",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "014.md",
					filePath: "014.md",
					path: "014",
				},
				content: "",
				img: "/images/bazar/014.webp",
				name: "音楽部",
				overview: "たくさんぷよぷよボールをすくおう！あなたは何個すくえるかな？",
				type: "recreation",
			},
		],
	},
};

export default meta;
