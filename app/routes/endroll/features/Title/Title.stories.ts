import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

type T = typeof Title;

const meta: Meta = {
	component: Title,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "Title",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
