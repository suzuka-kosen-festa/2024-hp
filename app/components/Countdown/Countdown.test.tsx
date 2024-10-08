import { composeStory } from "@storybook/react";
import { Temporal } from "temporal-polyfill";
import { act, render } from "@testing-library/react";
import meta, { Default as DefaultStory } from "./Countdown.stories";

describe("countdown.tsx", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.useRealTimers();
	});

	const Default = composeStory(DefaultStory, meta);

	it("should render 100 days ago in the countdown", () => {
		const mockDate = Temporal.ZonedDateTime.from({ day: 25, hour: 0, minute: 0, month: 7, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 });
		vi.setSystemTime(mockDate.toInstant().epochMilliseconds);

		const { container } = render(<Default />);
		const countdown = container.querySelector("[data-test=\"time\"]")?.getAttribute("dateTime");

		expect(countdown).toBe("100");
	});

	it("should change the display date when the date changes", () => {
		const mockDate = Temporal.ZonedDateTime.from({ day: 24, hour: 0, minute: 0, month: 7, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 });
		vi.setSystemTime(mockDate.toInstant().epochMilliseconds);

		const { container } = render(<Default />);

		const countdown = container.querySelector("[data-test=\"time\"]")?.getAttribute("dateTime");

		expect(countdown).toBe("101");

		act(() => {
			vi.advanceTimersByTime(24 * 60 * 60 * 1000);
		});

		const updatedCountdown = container.querySelector("[data-test=\"time\"]")?.getAttribute("dateTime");

		expect(updatedCountdown).toBe("100");
	});
});
