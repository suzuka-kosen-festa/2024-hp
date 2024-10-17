import type { Meta, StoryObj } from "@storybook/react";

import { SponsorSection } from "./SponsorSection";

type T = typeof SponsorSection;

const meta: Meta = {
	component: SponsorSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "SponsorSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		sponsors: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1001.md",
					filePath: "1001.md",
					path: "1001",
				},
				content: "",
				name: "一般社団法人鈴鹿青年会議所",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1009.md",
					filePath: "1009.md",
					path: "1009",
				},
				content: "",
				name: "株式会社アドカドウ工芸",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1012.md",
					filePath: "1012.md",
					path: "1012",
				},
				content: "",
				name: "株式会社オフィスセブン",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1015.md",
					filePath: "1015.md",
					path: "1015",
				},
				content: "",
				name: "株式会社クラフトワークス",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1017.md",
					filePath: "1017.md",
					path: "1017",
				},
				content: "",
				name: "株式会社ケーブルネット鈴鹿",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1025.md",
					filePath: "1025.md",
					path: "1025",
				},
				content: "",
				name: "株式会社プランドゥ",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1026.md",
					filePath: "1026.md",
					path: "1026",
				},
				content: "",
				name: "ホンダカーズ鈴鹿 玉垣店",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1027.md",
					filePath: "1027.md",
					path: "1027",
				},
				content: "",
				name: "株式会社まるかつ",
			},
		],
	},
};

export default meta;
