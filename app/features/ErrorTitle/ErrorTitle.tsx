import type { ReactNode } from "react";
import { useScramble } from "@/hooks/useScramble";

interface Props {
	title: string;
}

export function ErrorTitle({ title }: Props): ReactNode {
	const { ref } = useScramble({
		scramble: 8,
		text: title,
	});

	return (
		<h1
			style={{
				color: "#FFFFFF",
				fontFamily: "DotGothic16, sans-serif",
				fontSize: "3rem",
				fontWeight: 600,
			}}
			aria-label={title}
			ref={ref}
		/>
	);
}
