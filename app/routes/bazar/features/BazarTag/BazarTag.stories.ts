import type { Meta, StoryObj } from "@storybook/react";

import { BazarTag } from "./BazarTag";

type T = typeof BazarTag;

const meta: Meta = {
	component: BazarTag,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "BazarTag",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		children: "Test title",
	},
};

export default meta;
