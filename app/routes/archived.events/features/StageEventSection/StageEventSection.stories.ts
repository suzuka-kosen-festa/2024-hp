import type { Meta, StoryObj } from "@storybook/react";

import { StageEventSection } from "./StageEventSection";

type T = typeof StageEventSection;

const meta: Meta = {
	component: StageEventSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "StageEventSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		stageEvents: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "concert1.md",
					filePath: "concert1.md",
					path: "concert1",
				},
				content: "",
				endAt: "2024-11-02T10:15:00[Asia/Tokyo]",
				overview: "今年も音楽部の演奏で高専祭OPを盛り上げます！演奏曲はお楽しみに！",
				startAt: "2024-11-02T09:45:00[Asia/Tokyo]",
				title: "音楽部コンサート",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "concert2.md",
					filePath: "concert2.md",
					path: "concert2",
				},
				content: "",
				endAt: "2024-11-03T09:30:00[Asia/Tokyo]",
				overview: "今年も音楽部の演奏で高専祭OPを盛り上げます！演奏曲はお楽しみに！",
				startAt: "2024-11-03T09:00:00[Asia/Tokyo]",
				title: "音楽部コンサート",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "dance1.md",
					filePath: "dance1.md",
					path: "dance1",
				},
				content: "",
				endAt: "2024-11-02T10:35:00[Asia/Tokyo]",
				overview: "毎年大盛り上がりのダンスが今年も登場！！J-POP、K-POP、HIPHOP、アニソンなんでもありのDANCE THE NIGHT♪",
				startAt: "2024-11-02T10:15:00[Asia/Tokyo]",
				title: "ダンスバトル①",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "dance2.md",
					filePath: "dance2.md",
					path: "dance2",
				},
				content: "",
				endAt: "2024-11-02T11:40:00[Asia/Tokyo]",
				overview: "毎年大盛り上がりのダンスが今年も登場！！J-POP、K-POP、HIPHOP、アニソンなんでもありのDANCE THE NIGHT♪",
				startAt: "2024-11-02T11:20:00[Asia/Tokyo]",
				title: "ダンスバトル②",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "dance3.md",
					filePath: "dance3.md",
					path: "dance3",
				},
				content: "",
				endAt: "2024-11-02T11:40:00[Asia/Tokyo]",
				overview: "毎年大盛り上がりのダンスが今年も登場！！J-POP、K-POP、HIPHOP、アニソンなんでもありのDANCE THE NIGHT♪",
				startAt: "2024-11-02T12:25:00[Asia/Tokyo]",
				title: "ダンスバトル③",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "finale.md",
					filePath: "finale.md",
					path: "finale",
				},
				content: "",
				endAt: "2024-11-03T16:00:00[Asia/Tokyo]",
				overview: "この日のために準備を進めてきた高専祭実行委員本部によるパフォーマンス！高専祭最後はみなさんで盛りあがろう！",
				startAt: "2024-11-03T15:25:00[Asia/Tokyo]",
				title: "フィナーレ",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "jankenn.md",
					filePath: "jankenn.md",
					path: "jankenn",
				},
				content: "",
				endAt: "2024-11-02T12:10:00[Asia/Tokyo]",
				overview: "ルールは簡単、ハンマーで相手の頭を叩くだけ！この対決で2人のいざこざの決着をつけよう！",
				startAt: "2024-11-02T11:40:00[Asia/Tokyo]",
				title: "ジャンボたたいてかぶってじゃんけん",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "katsuyama.md",
					filePath: "katsuyama.md",
					path: "katsuyama",
				},
				content: "",
				endAt: "2024-11-02T11:05:00[Asia/Tokyo]",
				overview: "鈴鹿高専うまれのよさこいグループ、勝山組と申します！結成より21年、声＆パワー＆汗＆臭いで積み重ねた「よさこい」をご覧あれ！",
				startAt: "2024-11-02T10:50:00[Asia/Tokyo]",
				title: "勝山組よさこいパフォーマンス",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "kayousai.md",
					filePath: "kayousai.md",
					path: "kayousai",
				},
				content: "",
				endAt: "2024-11-03T11:10:00[Asia/Tokyo]",
				overview: "あの有名なテレビ番組のパロディ！あなたはあの名曲のサビが歌えますか？イントロを聞いてサビを歌え！！",
				startAt: "2024-11-03T10:30:00[Asia/Tokyo]",
				title: "スズカ高専歌謡祭",
			},
		],
	},
};

export default meta;
