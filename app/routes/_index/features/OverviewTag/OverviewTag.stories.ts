import type { Meta, StoryObj } from "@storybook/react";

import { OverviewTag } from "./OverviewTag";

type T = typeof OverviewTag;

const meta: Meta = {
	component: OverviewTag,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "OverviewTag",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		children: "Test title",
	},
};

export default meta;
