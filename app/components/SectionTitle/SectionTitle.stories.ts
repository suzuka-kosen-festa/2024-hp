import type { Meta, StoryObj } from "@storybook/react";

import { SectionTitle } from "./SectionTitle";

type T = typeof SectionTitle;

const meta: Meta = {
	args: {
		icon: "message",
		variant: "red",
	},
	component: SectionTitle,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "SectionTitle",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const Blue: Story = {
	args: {
		variant: "blue",
	},
};

export const Info: Story = {
	args: {
		icon: "info",
	},
};

export const Title: Story = {
	args: {
		title: "Title",
	},
};

export default meta;
