import type { Meta, StoryObj } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { TimeTableSwitcher } from "./TimeTableSwitcher";

type T = typeof TimeTableSwitcher;

const meta: Meta = {
	component: TimeTableSwitcher,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "TimeTableSwitcher",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		days: [1, 2],
		onClick: () => actions("onClick"),
	},
};

export default meta;
