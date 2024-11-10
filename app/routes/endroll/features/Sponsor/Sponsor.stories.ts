import type { Meta, StoryObj } from "@storybook/react";

import { Sponsor } from "./Sponsor";

type T = typeof Sponsor;

const meta: Meta = {
	component: Sponsor,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "Sponsor",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
