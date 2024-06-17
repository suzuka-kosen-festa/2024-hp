import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import meta, { Default as DefaultStory } from "./Footer.stories";

describe("Footer.tsx", () => {
	const Default = composeStory(DefaultStory, meta);
});
