import { getContentBoxStyle } from "./helper";

describe("dropdownHelper", () => {
	describe("getConetentBoxStyle", () => {
		it("returns bottom style when the bottom side of the trigger has enough space to display content", () => {
			const triggerRect = { bottom: 140, left: 0, right: 120, top: 100 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 800, width: 1000 };
			const scroll = { left: 0, top: 0 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				left: "-5px", // trigger left - 5
				maxHeight: "",
				top: "135px", // 140 - 5
			});
		});

		it("returns top style when the bottom side of the trigger does not have enough space to display content but top side has", () => {
			const triggerRect = { bottom: 640, left: 0, right: 120, top: 600 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 800, width: 1000 };
			const scroll = { left: 0, top: 0 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				left: "-5px", // trigger left - 5
				maxHeight: "",
				top: "205px", // 600 - 400 + 5
			});
		});

		it("return bottom style including maxHeight when both of the top and the bottom side does not have enough space to display content and the trigger is in the upper side of the screen", () => {
			const triggerRect = { bottom: 140, left: 0, right: 120, top: 100 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 370, width: 1000 };
			const scroll = { left: 0, top: 0 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				left: "-5px", // trigger left - 5
				maxHeight: "220px", // 370 - 140 - 10
				top: "135px", // 140 - 5
			});
		});

		it("return top style including maxHeight when both of the top and the bottom side does not have enough space to display content and the trigger is in the lower side of the screen", () => {
			const triggerRect = { bottom: 240, left: 0, right: 120, top: 200 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 370, width: 1000 };
			const scroll = { left: 0, top: 0 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				left: "-5px", // trigger left - 5
				maxHeight: "190px", // 200 - 10
				top: "15px", // 0 + 10 + 5
			});
		});

		it("returns left style when the trigger is in the right side of the screen", () => {
			const triggerRect = { bottom: 140, left: 500, right: 620, top: 100 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 800, width: 1000 };
			const scroll = { left: 0, top: 0 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				maxHeight: "",
				right: "375px", // window width - trigger right - 5
				top: "135px", // 140 - 5
			});
		});

		it("returns style considering scroll position", () => {
			const triggerRect = { bottom: 140, left: 0, right: 120, top: 100 };
			const contentSize = { height: 400, width: 300 };
			const windowSize = { height: 800, width: 1000 };
			const scroll = { left: 600, top: 500 };
			expect(
				getContentBoxStyle(triggerRect, contentSize, windowSize, scroll),
			).toEqual({
				left: "595px", // trigger left + scroll left - 5
				maxHeight: "",
				top: "635px", // 140 - 5 + 500
			});
		});
	});
});
