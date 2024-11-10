import type { ReactNode } from "react";
import { Suspense } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { useScramble } from "@/hooks/useScramble";

interface Props {
	isRight: boolean;
	members: string[];
	team: string;
}

export function EndrollBlock({ isRight, members, team }: Props): ReactNode {
	const { ref, replay } = useScramble({ scramble: 8, text: team });

	return (
		<section
			style={assignInlineVars({
				[styles.textAlign]: isRight ? "end" : "start",
			})}
			className={styles.block}
		>
			<Suspense fallback={<h2 className={styles.team}>{team}</h2>}>
				<h2 className={styles.team} onMouseOver={() => { replay(); }} ref={ref} />
			</Suspense>
			<ul className={styles.members}>
				{members.map(member => (
					<Suspense fallback={<li>{member}</li>} key={member}>
						<Member member={member} />
					</Suspense>
				))}
			</ul>
		</section>
	);
}

interface MemberProps {
	member: string;
}

function Member({ member }: MemberProps): ReactNode {
	const { ref, replay } = useScramble({ scramble: 8, text: member });

	return (
		<li onMouseOver={() => { replay(); }} ref={ref}>{member}</li>
	);
}
