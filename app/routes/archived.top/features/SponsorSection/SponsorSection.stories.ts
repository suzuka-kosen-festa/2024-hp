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
		personalSponsors: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "1.md",
					filePath: "1.md",
					path: "1",
				},
				content: "",
				name: "うえちゃん",
			},
		],
		specialSponsors: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "001.md",
					filePath: "001.md",
					path: "001",
				},
				content: "",
				description: "三重県初！飛高専塾が鈴鹿にOPEN！！鈴鹿高専を目指す中学生の皆様、高専入試で不安なことはありませんか？ <br> 詳細は第2体育館の特設ブース、もしくはお電話にてご相談ください！",
				images: ["sponsor/001.webp"],
				name: "飛高専塾",
				tel: "059-389-7860",
			},
		],
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
