import type { ReactNode } from "react";
import { lazy } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

const MessageText = lazy(() => import("~icons/custom/message-text"));
const InfoBox = lazy(() => import("~icons/custom/info-box.svg"));

interface Props {
	icon: "info" | "message";
	variant: "blue" | "red";
}

export function SectionTitle({
	icon,
	variant,
}: Props): ReactNode {
	return (
		<span className={styles.wrapper}>
			<span
				style={assignInlineVars({
					[styles.lineBackgroundColor]: variant === "red"
						? `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.red} 50%, ${vars.color.black} 100%)`
						: `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.blue} 50%, ${vars.color.black} 100%)`,
				})}
				className={styles.line}
				role="presentation"
			/>
			<span
				style={assignInlineVars({
					[styles.boxShadow]: variant === "red" ? `0px 0px 50px 0px ${vars.color.red}` : `0px 0px 50px 0px ${vars.color.blue}`,
					[styles.iconBoxBackgroundColor]: variant === "red" ? vars.color.red : vars.color.blue,
				})}
				className={styles.iconBox}
			>
				{icon === "message" ? <MessageText className={styles.icon} /> : <InfoBox className={styles.icon} />}
			</span>
		</span>
	);
}
