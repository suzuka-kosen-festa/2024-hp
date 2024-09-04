import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";
import { EventCard } from "./EventCard";

type T = typeof EventCard;

const meta: Meta = {
	component: EventCard,
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
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "EventCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		children: "test test test test test ああああああああああああああああああああああああ",
		hash: "test",
		title: "Test title",
	},
};

export default meta;
