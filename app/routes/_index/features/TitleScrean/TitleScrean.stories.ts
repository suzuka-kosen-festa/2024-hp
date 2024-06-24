import type { Meta, StoryObj } from "@storybook/react";

import { TitleScrean } from "./TitleScrean";

type T = typeof TitleScrean;

const meta: Meta = {
	title: "TitleScrean",
	component: TitleScrean,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
