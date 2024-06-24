import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

type T = typeof Footer;

const meta: Meta = {
	title: "Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
