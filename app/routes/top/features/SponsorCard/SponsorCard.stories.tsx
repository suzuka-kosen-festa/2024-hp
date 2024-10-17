import type { Meta, StoryObj } from "@storybook/react";

import { SponsorCard } from "./SponsorCard";

type T = typeof SponsorCard;

const meta: Meta = {
	component: SponsorCard,
	decorators: [
		Story => (
			<ul>
				<Story />
			</ul>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "SponsorCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		name: "Sponsor",
	},
};

export default meta;
