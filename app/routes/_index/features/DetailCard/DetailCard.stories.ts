import type { Meta, StoryObj } from "@storybook/react";

import { DetailCard } from "./DetailCard";

type T = typeof DetailCard;

const meta: Meta = {
	component: DetailCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "DetailCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		children: "来訪される中学生の方々で、進路説明会に出席をご希望される方は詳細をご覧ください。",
		title: "進路説明会について",
		url: "/",
	},
};

export default meta;
