import type { Meta, StoryObj } from "@storybook/react";

import { Countdown } from "./Countdown";

type T = typeof Countdown;

const meta: Meta = {
	component: Countdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Countdown",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
