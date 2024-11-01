import type { ReactNode } from "react";
import * as styles from "./styles.css";
import BookIcon from "~icons/mingcute/book-6-line";
import MapIcon from "~icons/ri/map-pin-line";
import FormIcon from "~icons/mdi/form";
import { SectionTitle } from "@/components/SectionTitle";
import { CardExternalLink } from "@/components/CardExternalLink";

export function GhostHouseSection(): ReactNode {
	return (
		<section aria-label="ghost-house section" className={styles.section} id="ghostHouse">
			<SectionTitle color="cyan" title="お化け屋敷" />
			<div className={styles.container}>
				<img alt="お化け屋敷" loading="lazy" src="/images/ghost-house.png" />
				<div className={styles.box}>
					<div className={styles.largeCard}>
						<BookIcon className={styles.icon} />
						<h3 className={styles.cardTitle}>ストーリー</h3>
						<p className={styles.cardText}>
							王様から王冠を取り戻すように指示されたあなたは、館を目指して森の中を進んでいく。数々の試練を乗り越え、王冠を取り戻すことができるのか､､､
						</p>
					</div>
					<div className={styles.smallCard}>
						<MapIcon className={styles.icon} />
						<h3 className={styles.cardTitle}>開催場所</h3>
						<p className={styles.cardText}>I科棟1階(3E、3C）待合室4E</p>
					</div>
					<div className={styles.formCard}>
						<FormIcon className={styles.icon} />
						<h3 className={styles.cardTitle}>お申し込み</h3>
						<p className={styles.cardText}>下記のフォームからお申し込みください。</p>
						<CardExternalLink className={styles.link} text="申し込みフォームへ" url="https://qr-ticket-management-623513941420.asia-northeast1.run.app/" />
					</div>
				</div>
			</div>
		</section>
	);
}
