import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";

import { HeroSection } from "./HeroSection";

type T = typeof HeroSection;

const meta: Meta = {
	title: "HeroSection",
	component: HeroSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					path: "/*",
					action: () => ({ redirect: "/" }),
					loader: () => ({ redirect: "/" }),
					Component: () => story(),
				},
			]);

			return remixStub({ initialEntries: ["/"] });
		},
	],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
