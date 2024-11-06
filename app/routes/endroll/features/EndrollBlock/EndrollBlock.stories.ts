import type { Meta, StoryObj } from "@storybook/react";

import { EndrollBlock } from "./EndrollBlock";

type T = typeof EndrollBlock;

const meta: Meta = {
	component: EndrollBlock,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "EndrollBlock",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		isRight: false,
		members: ["Alice", "Bob", "Charlie"],
		team: "Team",
	},
};

export const Right: Story = {
	args: {
		isRight: true,
		members: ["Alice", "Bob", "Charlie"],
		team: "Team",
	},
};

export default meta;
