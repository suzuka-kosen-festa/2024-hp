import type { Meta, StoryObj } from "@storybook/react";

import { Epilogue } from "./Epilogue";

type T = typeof Epilogue;

const meta: Meta = {
	component: Epilogue,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "Epilogue",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
