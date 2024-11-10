import type { Meta, StoryObj } from "@storybook/react";

import { ThankYou } from "./ThankYou";

type T = typeof ThankYou;

const meta: Meta = {
	component: ThankYou,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ThankYou",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
