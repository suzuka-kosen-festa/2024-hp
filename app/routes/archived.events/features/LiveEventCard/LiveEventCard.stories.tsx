import type { Meta, StoryObj } from "@storybook/react";

import { LiveEventCard } from "./LiveEventCard";

type T = typeof LiveEventCard;

const meta: Meta = {
	component: LiveEventCard,
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
	title: "LiveEventCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Main: Story = {
	args: {
		endAt: "2024-01-01T01:00:00[Asia/Tokyo]",
		name: "Name",
		overview: "Overview text text text text text text text text text text text text text text text text",
		press: "https://placehold.jp/1600x900.png",
		stage: "main",
		startAt: "2024-01-01T00:00:00[Asia/Tokyo]",
	},
};

export const Sub: Story = {
	args: {
		endAt: "2024-01-01T01:00:00[Asia/Tokyo]",
		name: "Name",
		overview: "Overview text text text text text text text text text text text text text text text text",
		press: "https://placehold.jp/1200x900.png",
		stage: "sub",
		startAt: "2024-01-01T00:00:00[Asia/Tokyo]",
	},
};

export default meta;
