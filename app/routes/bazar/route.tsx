import type { ReactNode } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import * as styles from "./styles.css";
import { loader } from "./handlers";
import { BazarSection } from "./features/BazarSection";
import { ExhibitionSection } from "./features/ExhibitionSection";
import { Footer } from "@/components/Footer";

export default function Page(): ReactNode {
	const { exhibitions, foods, recreations } = useLoaderData<typeof loader>();

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
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>
					<Link className={styles.link} to="/top#overview">開催概要</Link>
					{" "}
					/ バザー・レクリエーション・学科展示詳細
				</h1>
				<BazarSection foods={foods} recreations={recreations} />
				<ExhibitionSection exhibitions={exhibitions} />
			</div>
			<Footer />
		</>
	);
}

export { loader };
