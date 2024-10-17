import type { Meta, StoryObj } from "@storybook/react";

import { createRemixStub } from "@remix-run/testing";
import { OverviewSection } from "./OverviewSection";

type T = typeof OverviewSection;

const meta: Meta = {
	component: OverviewSection,
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					action: () => ({ redirect: "/" }),
					Component: () => story(),
					loader: () => ({ redirect: "/" }),
					path: "/*",
				},
			]);

			return remixStub({ initialEntries: ["/"] });
		},
	],
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "OverviewSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
