import type { Meta, StoryObj } from "@storybook/react";

import { PhilosophySection } from "./PhilosophySection";

type T = typeof PhilosophySection;

const meta: Meta = {
	title: "PhilosophySection",
	component: PhilosophySection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
