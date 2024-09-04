import type { Meta, StoryObj } from "@storybook/react";

import { TitleScrean } from "./TitleScrean";

type T = typeof TitleScrean;

const meta: Meta = {
	component: TitleScrean,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "TitleScrean",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
