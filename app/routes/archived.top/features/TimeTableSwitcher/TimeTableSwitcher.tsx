import type { KeyboardEvent, ReactNode, RefObject } from "react";
import { createRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";

interface Props {
	days: (1 | 2)[];
	onClick: (day: 1 | 2) => void;
}

export function TimeTableSwitcher({ days, onClick }: Props): ReactNode {
	const [selectedDay, setSelectedDay] = useState(days[0]);
	const buttonsRef = useRef<RefObject<HTMLButtonElement>[]>([]);
	const indicatorRef = useRef<HTMLDivElement>(null);
	const selectedIndex = useMemo(
		() => days.findIndex(day => day === selectedDay),
		[days, selectedDay],
	);
	days.forEach((_, i) => {
		// eslint-disable-next-line react/no-create-ref
		buttonsRef.current[i] = createRef();
	});

	useEffect(() => {
		indicatorRef.current?.style.setProperty(
			"transform",
			`translateX(calc(${100 * selectedIndex}% + ${16 * selectedIndex + 8}px))`,
		);
	}, [days, selectedIndex]);

	const handleClick = useCallback(
		(day: 1 | 2) => {
			setSelectedDay(day);
			if (typeof onClick === "function") {
				onClick(day);
			}
		},
		[onClick],
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLButtonElement>, index: number) => {
			const targetButton = buttonsRef.current[index]?.current;
			switch (e.key) {
				case "ArrowUp":
				case "ArrowLeft": {
					e.preventDefault();
					const prevButtonRef
            = buttonsRef.current[(days.length + index - 1) % days.length];
					const prevButton = prevButtonRef?.current;
					prevButton?.focus();
					break;
				}
				case "ArrowDown":
				case "ArrowRight": {
					e.preventDefault();
					const nextButtonRef = buttonsRef.current[(index + 1) % days.length];
					const nextButton = nextButtonRef?.current;
					nextButton?.focus();
					break;
				}
				case "Enter":
				case "Space": {
					if (
						targetButton
						&& targetButton.getAttribute("aria-checked") === "true"
					) {
						e.preventDefault();
					}
					break;
				}
			}
		},
		[days.length],
	);

	if (days.length === 0) {
		return null;
	}

	return (
		<div
			style={assignInlineVars({
				[styles.gridTemplateColumns]: `repeat(${days.length}, 1fr)`,
			})}
			className={styles.radioGroup}
			role="radiogroup"
		>
			<div
				style={assignInlineVars({
					[styles.transform]: `translateX(calc(${100 * selectedIndex}% + ${
						16 * selectedIndex + 8
					}px))`,
					[styles.width]: `calc(${100 / days.length}% - ${16}px)`,
				})}
				className={styles.indicator}
				ref={indicatorRef}
			/>
			{days.map((day, i) => {
				const isSelected = day === selectedDay;

				return (
					<button
						aria-checked={isSelected}
						className={styles.button}
						key={day}
						onClick={() => handleClick(day)}
						onKeyDown={e => handleKeyDown(e, i)}
						ref={buttonsRef.current[i]}
						role="radio"
						tabIndex={isSelected ? 0 : -1}
						type="button"
					>
						{day === 1 ? "11月2日" : "11月3日"}
					</button>
				);
			})}
		</div>
	);
}
