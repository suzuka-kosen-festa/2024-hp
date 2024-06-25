import type { ReactNode } from "react";
import { clsx } from "clsx";
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
			<Dropdown.Root>
				<Dropdown.Trigger>
					<button className={styles.trigger}>
						<BookOpen className={styles.bookOpen} />
					</button>
				</Dropdown.Trigger>
				<Dropdown.Content>
					<HeroContentBox>
						<DropdownContent />
					</HeroContentBox>
				</Dropdown.Content>
			</Dropdown.Root>
			<HeroContentBox className={styles.visible}>
				<DropdownContent />
			</HeroContentBox>
		</header>
	);
}

function DropdownContent() {
	return (
		<nav className={styles.dropdownContent}>
			<BookOpen className={clsx(styles.bookOpen, styles.visible)} />
			<a className={clsx(styles.link, styles.half)} href="#philosophy">高専祭について</a>
			<a className={styles.link} href="#overview">開催概要</a>
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
					>
						<Facebook className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/kosenfesta"
						rel="noreferrer"
						target="_blank"
					>
						<Instagram className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="https://x.com/KOSENFESTA"
						rel="noreferrer"
						target="_blank"
					>
						<X className={styles.icon} />
					</a>
				</li>
			</ul>
		</nav>
	);
}
