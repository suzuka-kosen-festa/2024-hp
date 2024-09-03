import type { Meta, StoryObj } from "@storybook/react";

import { OverviewBox } from "./OverviewBox";

type T = typeof OverviewBox;

const meta: Meta = {
	args: {
		children: (
			<div
				style={{
					display: "grid",
					height: "100px",
					placeItems: "center",
					width: "200px",
				}}
			>
				test children
			</div>
		),
	},
	component: OverviewBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "OverviewBox",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const WithTitle: Story = {
	args: {
		title: "Test title",
	},
};

export default meta;
