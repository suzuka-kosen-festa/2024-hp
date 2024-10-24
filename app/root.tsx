import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";
import { Suspense, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Partytown } from "@builder.io/partytown/react";
import { ErrorBoundary as ErrorBoundaryComponent } from "./components/ErrorBoundary";
import { NavigationHandler } from "./components/NavigationHandler/NavigationHandler";
import "@/styles/globals.css";

interface Props {
	children: ReactNode;
	noIndex?: boolean;
	title?: string;
}

function Document({ children, noIndex, title }: Props): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				{noIndex && <meta content="noindex" name="robots" />}
				{import.meta.env.PROD && (
					<>
						<Partytown forward={["dataLayer.push"]} />
						<script
							dangerouslySetInnerHTML={{
								__html: `
									(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
									new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
									j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
									'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
									})(window,document,'script','dataLayer','GTM-KLPTTQ82');
								`,
							}}
							type="text/partytown"
						/>
					</>
				)}
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
				<NavigationHandler />
			</body>
		</html>
	);
}

function App(): ReactNode {
	useEffect(() => {
		gsap.registerPlugin(useGSAP);
	}, []);

	return (
		<Document>
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</Document>
	);
}

export const links: LinksFunction = () => [
	{ href: "https://fonts.googleapis.com", rel: "preconnect" },
	{ crossOrigin: "anonymous", href: "https://fonts.gstatic.com", rel: "preconnect" },
	{ href: "https://fonts.googleapis.com/css2?family=DotGothic16&family=Jura:wght@300&family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;600&family=Roboto+Mono&display=swap", rel: "stylesheet" },
	{ href: "/favicon.svg", rel: "icon", type: "image/svg+xml" },
	{ href: "/favicon.ico", rel: "icon", sizes: "any" },
];

export const meta: MetaFunction = () => [
	{ charSet: "utf-8" },
	{ content: "width=device-width, initial-scale=1", name: "viewport" },
	{ content: "第59回鈴鹿高専祭公式サイト", name: "description" },
	{ content: "第59回 鈴鹿高専祭", property: "og:title" },
	{ content: "第59回鈴鹿高専祭公式サイト", property: "og:description" },
	{ content: "https://snct-fes.info", property: "og:url" },
	{ content: "https://www.snct-fes.info/ogp.png", property: "og:image" },
	{ content: "https://www.snct-fes.info/ogp.png", property: "og:image:url" },
	{ content: "第59回 鈴鹿高専祭", property: "og:image:alt" },
	{ content: "website", property: "og:type" },
	{ content: "summary_large_image", name: "twitter:card" },
	{ content: "第59回 鈴鹿高専祭", name: "twitter:title" },
	{ content: "第59回鈴鹿高専祭公式サイト", name: "twitter:description" },
	{ content: "https://www.snct-fes.info/ogp.png", name: "twitter:image" },
	{ content: "第59回 鈴鹿高専祭", name: "twitter:image:alt" },
	{ content: "@KOSENFESTA", name: "twitter:site" },
];

export function ErrorBoundary() {
	const error = useRouteError();

	return (
		<Document
			noIndex
			title="Error"
		>
			<ErrorBoundaryComponent error={error} />
		</Document>
	);
}

export default App;
