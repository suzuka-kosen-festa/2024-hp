import type { Meta, StoryObj } from "@storybook/react";

import { Everyone } from "./Everyone";

type T = typeof Everyone;

const meta: Meta = {
	component: Everyone,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "Everyone",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
