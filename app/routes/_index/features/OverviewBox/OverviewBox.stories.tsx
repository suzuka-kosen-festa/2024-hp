import type { Meta, StoryObj } from "@storybook/react";

import { OverviewBox } from "./OverviewBox";

type T = typeof OverviewBox;

const meta: Meta = {
	title: "OverviewBox",
	component: OverviewBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: (
			<div
				style={{
					width: "200px",
					height: "100px",
					display: "grid",
					placeItems: "center",
				}}
			>
				test children
			</div>
		),
	},
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const WithTitle: Story = {
	args: {
		title: "Test title",
	},
};

export default meta;
