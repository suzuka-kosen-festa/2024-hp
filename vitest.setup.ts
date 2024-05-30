import "@testing-library/jest-dom/vitest";
import "@vanilla-extract/css/disableRuntimeStyles";

import { setProjectAnnotations } from "@storybook/react";
import { configure } from "@testing-library/react";

import projectAnotations from "./.storybook/preview";

configure({
	testIdAttribute: "data-test",
});

setProjectAnnotations(projectAnotations);

/** @see https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom */
beforeAll(() => {});
