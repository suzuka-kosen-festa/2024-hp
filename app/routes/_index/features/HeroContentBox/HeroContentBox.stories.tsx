import type { Meta, StoryObj } from "@storybook/react";

import { HeroContentBox } from "./HeroContentBox";

type T = typeof HeroContentBox;

const meta: Meta = {
	title: "HeroContentBox",
	component: HeroContentBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: (
			<div>
				<p>Test 1</p>
				<p>Test 2</p>
				<p>Test 3</p>
			</div>
		),
	},
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
