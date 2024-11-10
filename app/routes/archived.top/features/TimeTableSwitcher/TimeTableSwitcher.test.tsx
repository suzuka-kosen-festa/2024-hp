import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import meta, { Default as DefaultStory } from "./TimeTableSwitcher.stories";

describe("timeTableSwitcher.tsx", () => {
	const Default = composeStory(DefaultStory, meta);
	it("the first button should be selected", () => {
		const { getByText } = render(<Default />);

		const button0 = getByText("11月2日");
		const button1 = getByText("11月3日");

		expect(button0.getAttribute("aria-checked")).toEqual("true");
		expect(button1.getAttribute("aria-checked")).toEqual("false");
	});
	it("onClick should be called when the button is clicked", async () => {
		const onClick = vi.fn();
		const user = userEvent.setup();

		const { getByText } = render(<Default onClick={onClick} />);
		await user.click(getByText("11月3日"));

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
