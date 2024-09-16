import type { Meta, StoryObj } from "@storybook/react";

import { ErrorBoundary } from "./ErrorBoundary";

type T = typeof ErrorBoundary;

const meta: Meta = {
	component: ErrorBoundary,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ErrorBoundary",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		error: new Error("Test error"),
	},
};

export default meta;
