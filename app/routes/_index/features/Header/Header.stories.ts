import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

type T = typeof Header;

const meta: Meta = {
	title: "Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
