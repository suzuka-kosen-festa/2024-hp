import type { Meta, StoryObj } from "@storybook/react";

import { ExhibitionCard } from "./ExhibitionCard";

type T = typeof ExhibitionCard;

const meta: Meta = {
	component: ExhibitionCard,
	decorators: [
		Story => (
			<ul>
				<Story />
			</ul>
		),
	],
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ExhibitionCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		department: "M",
		overview:
			"STEAM教育の一環として、トライス株式会社と共同で事務所の消費電力を削減します。エアコンの消費電力を削減する実験と消費電力を視覚化するアプリの制作を行い、カーボンニュートラルを促進しています。",
		team: "CO2削減のために～廃棄物分別の適正化、効率化～",
	},
};

export default meta;
