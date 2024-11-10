import type { Meta, StoryObj } from "@storybook/react";

import { ExhibitionSection } from "./ExhibitionSection";

type T = typeof ExhibitionSection;

const meta: Meta = {
	component: ExhibitionSection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ExhibitionSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		exhibitions: [
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "C_1.md",
					filePath: "C_1.md",
					path: "C_1",
				},
				content: "",
				department: "C",
				overview: "油脂成分を試行錯誤してすることで泡立ちがいい石鹸を作ることを目的としている 乳化剤の気泡効果を利用してふくらみのあ...",
				team: "よく泡立つ石鹸作成 乳化剤を作成したパンケーキ作り",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "C_2.md",
					filePath: "C_2.md",
					path: "C_2",
				},
				content: "",
				department: "C",
				overview: "紙類の分析のために住友電装に協力してもらい分光装置を用いて17種類の紙の種類を分別方法を提案したりクイズを作ったり...",
				team: "CO2削減のために～廃棄物分別の適正化、効率化～",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "C_3.md",
					filePath: "C_3.md",
					path: "C_3",
				},
				content: "",
				department: "C",
				overview: "「ペルチェ素子｣という板状の半導体熱電素子を用いて、水やナフタレンなどの融点を測定する装置を作製しました。",
				team: "ペルチェ素子を使った融点測定",
			},
			{
				_meta: {
					directory: ".",
					extension: "md",
					fileName: "C_4.md",
					filePath: "C_4.md",
					path: "C_4",
				},
				content: "",
				department: "C",
				overview: "私たちは有機化学をゲームで遊びながらまなあべるようにすることを目標にゲーム会阿発を進めて来ました。展示物はその簡易版です",
				team: "有機化学の学習支援用ゲームの開発",
			},
		],
	},
};

export default meta;
