import type { Meta, StoryObj } from "@storybook/react";

import { SectionTitle } from "./SectionTitle";

type T = typeof SectionTitle;

const meta: Meta = {
	title: "SectionTitle",
	component: SectionTitle,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	args: {
		icon: "message",
		variant: "red",
	},
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const Purple: Story = {
	args: {
		variant: "purple",
	},
};

export const Info: Story = {
	args: {
		icon: "info",
	},
};

export default meta;
