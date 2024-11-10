import type { ReactNode } from "react";
import { useLoaderData } from "@remix-run/react";
import * as styles from "./styles.css";
import { Epilogue } from "./features/Epilogue";
import { Title } from "./features/Title";
import { loader } from "./handlers";
import { EndrollBlock } from "./features/EndrollBlock";
import { Everyone } from "./features/Everyone";
import { Sponsor } from "./features/Sponsor";
import { ThankYou } from "./features/ThankYou";
import { Border } from "./features/Border";

export default function Page(): ReactNode {
	const { endrolls } = useLoaderData<typeof loader>();

	return (
		<>
			<picture>
				<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
				<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
				<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
				<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
				<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
				<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
				<img alt="" className={styles.background} src="/images/background.webp" />
			</picture>
			<Epilogue />
			<hr className={styles.hr} />
			<section className={styles.endroll}>
				<Title />
				{endrolls.map((endroll, index) => (
					<EndrollBlock isRight={index % 2 !== 0} key={endroll._meta.fileName} members={endroll.members} team={endroll.team} />
				))}
			</section>
			<Sponsor />
			<Everyone />
			<hr className={styles.final} />
			<ThankYou />
			<Border />
		</>
	);
}

export { loader };
