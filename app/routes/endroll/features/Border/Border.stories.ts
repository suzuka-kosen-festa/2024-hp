import type { Meta, StoryObj } from "@storybook/react";

import { Border } from "./Border";

type T = typeof Border;

const meta: Meta = {
	component: Border,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "Border",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
