import type { Meta, StoryObj } from "@storybook/react";

import { OverviewSection } from "./OverviewSection";

type T = typeof OverviewSection;

const meta: Meta = {
	component: OverviewSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "OverviewSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
