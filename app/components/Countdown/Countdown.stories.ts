import type { Meta, StoryObj } from "@storybook/react";

import { Countdown } from "./Countdown";

type T = typeof Countdown;

const meta: Meta = {
	title: "Countdown",
	component: Countdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
