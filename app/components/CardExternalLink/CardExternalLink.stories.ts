import type { Meta, StoryObj } from "@storybook/react";

import { CardExternalLink } from "./CardExternalLink";

type T = typeof CardExternalLink;

const meta: Meta = {
	component: CardExternalLink,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "CardExternalLink",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		text: "Link",
		url: "/",
	},
};

export default meta;
