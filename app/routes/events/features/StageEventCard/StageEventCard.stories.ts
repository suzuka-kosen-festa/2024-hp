import type { Meta, StoryObj } from "@storybook/react";

import { StageEventCard } from "./StageEventCard";

type T = typeof StageEventCard;

const meta: Meta = {
	component: StageEventCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "StageEventCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		endAt: "2024-01-01T01:00:00[Asia/Tokyo]",
		overview: "Overview text text text text text text text text text text text text text text text text",
		startAt: "2024-01-01T00:00:00[Asia/Tokyo]",
		title: "Title",
	},
};

export default meta;
