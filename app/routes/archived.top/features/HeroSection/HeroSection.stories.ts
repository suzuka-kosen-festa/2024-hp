import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";

import { HeroSection } from "./HeroSection";

type T = typeof HeroSection;

const meta: Meta = {
	component: HeroSection,
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
	title: "HeroSection",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
