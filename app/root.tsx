import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";

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

export const links: LinksFunction = () => [];

export const meta: MetaFunction = () => [
	{ charSet: "utf-8" },
	{ name: "viewport", content: "width=device-width" },
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
