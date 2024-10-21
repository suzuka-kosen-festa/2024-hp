import type { Meta, StoryObj } from "@storybook/react";

import { BazarSection } from "./BazarSection";

type T = typeof BazarSection;

const meta: Meta = {
	component: BazarSection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "BazarSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
