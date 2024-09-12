import type { Meta, StoryObj } from "@storybook/react";

import { GameEventCard } from "./GameEventCard";

type T = typeof GameEventCard;

const meta: Meta = {
	component: GameEventCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "GameEventCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		date: "2024-01-01T00:00:00[Asia/Tokyo]",
		day: 1,
		form: "https://example.com",
		guideBook: "https://example.com",
		title: "Title",
		venue: "Venue",
	},
};

export default meta;
