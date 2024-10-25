import type { Meta, StoryObj } from "@storybook/react";

import { SpecialSponsorCard } from "./SpecialSponsorCard";

type T = typeof SpecialSponsorCard;

const meta: Meta = {
	component: SpecialSponsorCard,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	title: "SpecialSponsorCard",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		description: "三重県初！飛高専塾が鈴鹿にOPEN！！鈴鹿高専を目指す中学生の皆様、高専入試で不安なことはありませんか？\n詳細は第2体育館の特設ブース、もしくはお電",
		images: ["/images/sponsor/001.webp"],
		name: "SpecialSponsorCard",
		tel: "059-389-7860",
	},
};

export default meta;
