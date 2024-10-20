import type { Meta, StoryObj } from "@storybook/react";

import { BazarCard } from "./BazarCard";

type T = typeof BazarCard;

const meta: Meta = {
	component: BazarCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "BazarCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		img: "https://placehold.jp/1600x900.png",
		name: "バザーの名前",
		overview: "バザーの概要",
		type: "food",
	},
};

export default meta;
