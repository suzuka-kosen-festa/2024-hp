import type { Meta, StoryObj } from "@storybook/react";

import { HeroSection } from "./HeroSection";

type T = typeof HeroSection;

const meta: Meta = {
	title: "HeroSection",
	component: HeroSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
