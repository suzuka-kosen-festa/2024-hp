import type { ReactNode } from "react";
import { Suspense, lazy } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

const MessageText = lazy(() => import("~icons/custom/message-text"));
const InfoBox = lazy(() => import("~icons/custom/info-box.svg"));

type Props = {
	icon: "info" | "message";
	variant: "blue" | "red";
	title?: never;
} | {
	title: string;
	icon?: never;
	variant?: never;
};

export function SectionTitle({
	icon,
	title,
	variant,
}: Props): ReactNode {
	return (
		<span className={styles.wrapper}>
			<span
				style={assignInlineVars({
					[styles.lineBackgroundColor]: typeof title !== "undefined"
						? "linear-gradient(to left, rgb(255 255 255 / 0.5) 0%, rgb(255 255 255 / 0.2) 50%, rgb(255 255 255 / 0.5) 100%)"
						: variant === "red"
							? `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.red} 50%, ${vars.color.black} 100%)`
							: `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.blue} 50%, ${vars.color.black} 100%)`,
				})}
				className={styles.line}
				role="presentation"
			/>
			{typeof title !== "undefined"
				? (
						<h2 className={styles.title}>{title}</h2>
					)
				: (
						<span
							style={assignInlineVars({
								[styles.boxShadow]: variant === "red" ? `0px 0px 50px 0px ${vars.color.red}` : `0px 0px 50px 0px ${vars.color.blue}`,
								[styles.iconBoxBackgroundColor]: variant === "red" ? vars.color.red : vars.color.blue,
							})}
							className={styles.iconBox}
						>
							<Suspense fallback={null}>
								{icon === "message" ? <MessageText className={styles.icon} /> : <InfoBox className={styles.icon} />}
							</Suspense>
						</span>
					)}
		</span>
	);
}
