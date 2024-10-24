import type { Meta, StoryObj } from "@storybook/react";

import { TimeTableHeading } from "./TimeTableHeading";

type T = typeof TimeTableHeading;

const meta: Meta = {
	component: TimeTableHeading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "TimeTableHeading",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Main: Story = {
	args: {
		type: "main",
	},
};

export const Sub: Story = {
	args: {
		type: "sub",
	},
};

export const Game: Story = {
	args: {
		type: "game",
	},
};

export const Live: Story = {
	args: {
		type: "live",
	},
};

export default meta;
