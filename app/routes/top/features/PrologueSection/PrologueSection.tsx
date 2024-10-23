import { useCallback, useEffect, useRef, useState } from "react";
import { prologue } from "./content";

export function PrologueSection() {
	const words = prologue;

	const [displayText, setDisplayText] = useState("");
	const [isWatched, setIsWatched] = useState(false);
	const currentTextRef = useRef("");
	const sectionRef = useRef<HTMLDivElement>(null);

	const typingEffect = useCallback(async () => {
		// スピードは小さいうが早い
		const typingSpeed = 75;
		const delayBetweenWords = 300;

		for (const word of words) {
			for (let i = 0; i <= word.length; i++) {
				const newText = currentTextRef.current + word.slice(0, i);
				setDisplayText(newText);
				await new Promise(resolve => setTimeout(resolve, typingSpeed));
			}
			await new Promise(resolve => setTimeout(resolve, delayBetweenWords));
			currentTextRef.current += `${word}\n`;
		}
		setIsWatched(true);
	}, [words]);

	useEffect(() => {
		function handleScroll() {
			if (sectionRef.current && !isWatched) {
				const sectionTop = sectionRef.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				if (sectionTop < windowHeight && sectionTop >= 0) {
					typingEffect();
					window.removeEventListener("scroll", handleScroll);
				}
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isWatched, typingEffect]);

	return { displayText, sectionRef };
}
