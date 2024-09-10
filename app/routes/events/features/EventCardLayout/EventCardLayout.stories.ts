import type { Meta, StoryObj } from "@storybook/react";

import { EventCardLayout } from "./EventCardLayout";

type T = typeof EventCardLayout;

const meta: Meta = {
	component: EventCardLayout,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "EventCardLayout",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Live: Story = {
	args: {
		children: "Live Event",
		kind: "live",
	},
};

export const Game: Story = {
	args: {
		children: "Game Event",
		kind: "game",
	},
};

export const Stage: Story = {
	args: {
		children: "Stage Event",
		kind: "stage",
	},
};

export default meta;
