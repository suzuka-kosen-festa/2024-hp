import type { Meta, StoryObj } from "@storybook/react";

import { ExhibitionSection } from "./ExhibitionSection";

type T = typeof ExhibitionSection;

const meta: Meta = {
	component: ExhibitionSection,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "ExhibitionSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
