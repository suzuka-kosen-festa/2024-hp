import type { ReactNode } from "react";
import { Suspense } from "react";
import { clsx } from "clsx";
import { Link } from "@remix-run/react";
import { HeroContentBox } from "../HeroContentBox";
import * as styles from "./styles.css";
import BookOpen from "~icons/pixelarticons/book-open";
import Facebook from "~icons/ion/logo-facebook";
import Instagram from "~icons/ion/logo-instagram";
import X from "~icons/ion/logo-x";
import { Dropdown } from "@/components/Dropdown";

export function Header(): ReactNode {
	return (
		<header className={styles.header}>
			<img
				decoding="async"
				loading="eager"
				src="/images/logo.webp"
				srcSet={["/images/logo.webp 1x", "/images/logo@2x.webp 2x"].join(", ")}
				alt="鈴鹿高専祭「BORDER」ロゴ"
				width={58.29}
				height={96}
				className={styles.logo}
			/>
			<HeroContentBox className={styles.visible}>
				<DropdownContent />
			</HeroContentBox>
			<div className={styles.triggerWrapper}>
				<Suspense fallback={null}>
					<Dropdown.Root>
						<Dropdown.Trigger>
							<button className={styles.trigger} title="メニューを開く">
								<BookOpen className={styles.bookOpen} />
							</button>
						</Dropdown.Trigger>
						<Dropdown.Content>
							<HeroContentBox>
								<DropdownContent />
							</HeroContentBox>
						</Dropdown.Content>
					</Dropdown.Root>
				</Suspense>
			</div>
		</header>
	);
}

function DropdownContent() {
	return (
		<nav className={styles.dropdownContent}>
			<BookOpen className={clsx(styles.bookOpen, styles.visible)} />
			<Link className={clsx(styles.link, styles.half)} to="#philosophy">高専祭について</Link>
			<Link className={styles.link} to="#overview">開催概要</Link>
			<hr className={styles.hr} />
			<a
				className={clsx(styles.link, styles.half)}
				href="https://www.suzuka-ct.ac.jp/"
				rel="noreferrer"
				target="_blank"
			>
				鈴鹿高専HP
			</a>
			<ul className={styles.sns}>
				<li>
					<a
						href="https://www.facebook.com/people/KOSEN-FESTA-%E9%88%B4%E9%B9%BF%E9%AB%98%E5%B0%82%E7%A5%AD/61556514660247/"
						rel="noreferrer"
						target="_blank"
						title="Facebook"
					>
						<Facebook className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/kosenfesta"
						rel="noreferrer"
						target="_blank"
						title="Instagram"
					>
						<Instagram className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="https://x.com/KOSENFESTA"
						rel="noreferrer"
						target="_blank"
						title="Twitter"
					>
						<X className={styles.icon} />
					</a>
				</li>
			</ul>
		</nav>
	);
}
