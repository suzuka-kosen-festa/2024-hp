import type { Meta, StoryObj } from "@storybook/react";

import { ErrorTitle } from "./ErrorTitle";

type T = typeof ErrorTitle;

const meta: Meta = {
	component: ErrorTitle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ErrorTitle",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		title: "Test",
	},
};

export default meta;
