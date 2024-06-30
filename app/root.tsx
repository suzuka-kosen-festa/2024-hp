import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";
import "@/styles/globals.css";

interface Props {
	title?: string;
	noIndex?: boolean;
	children: ReactNode;
}

function Document({ title, noIndex, children }: Props): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				{noIndex && <meta name="robots" content="noindex" />}
				<Meta />
				<Links />
				{title ? <title data-title-override="">{title}</title> : <title>第59回 鈴鹿高専祭</title>}
			</head>
			<body>
				<main>
					{children}
				</main>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function App(): ReactNode {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DotGothic16&family=Jura:wght@300&display=swap" },
	{ rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" },
	{ rel: "icon", href: "/images/favicon.ico", sizes: "any" },
];

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => [
	{ charSet: "utf-8" },
	{ name: "viewport", content: "width=device-width, initial-scale=1" },
	{ name: "description", content: "第59回鈴鹿高専祭公式サイト" },
	{ name: "og:title", content: "第59回 鈴鹿高専祭" },
	{ name: "og:description", content: "第59回鈴鹿高専祭公式サイト" },
	{ name: "og:url", content: "https://snct-fes.info" },
	{ name: "og:image", content: "/images/ogp.png" },
	{ name: "og:type", content: "website" },
	{ name: "twitter:card", content: "summary_large_image" },
	{ name: "twitter:title", content: "第59回 鈴鹿高専祭" },
	{ name: "twitter:description", content: "第59回鈴鹿高専祭公式サイト" },
	{ name: "twitter:image", content: "/images/ogp.png" },
	{ name: "twitter:site", content: "@KOSENFESTA" },
];

export function ErrorBoundary() {
	const error = useRouteError();
	if (!(typeof window !== "undefined"
		&& window.document
		&& window.document.createElement))
		console.error(error);

	if (isRouteErrorResponse(error)) {
		return (
			<Document
				noIndex
				title={error.statusText}
			>
				<main>
					<div>
						<h1>
							{error.status}
						</h1>
						<a
							href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
							rel="noreferrer"
							target="_blank"
						>
							{error.statusText}
						</a>
					</div>
				</main>
			</Document>
		);
	}

	return (
		<Document noIndex title="Error">
			<main>
				<div>
					<h1>
						Error
					</h1>
					<p>
						問題が発生しました。しばらくしてから再度お試しください。
					</p>
				</div>
			</main>
		</Document>
	);
}

export default App;
