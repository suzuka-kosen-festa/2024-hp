import type { Meta, StoryObj } from "@storybook/react";

import { GhostHouseSection } from "./GhostHouseSection";

type T = typeof GhostHouseSection;

const meta: Meta = {
	component: GhostHouseSection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "GhostHouseSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
