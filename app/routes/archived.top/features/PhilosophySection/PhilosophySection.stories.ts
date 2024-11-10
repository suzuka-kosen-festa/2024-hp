import type { Meta, StoryObj } from "@storybook/react";

import { PhilosophySection } from "./PhilosophySection";

type T = typeof PhilosophySection;

const meta: Meta = {
	component: PhilosophySection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "PhilosophySection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
