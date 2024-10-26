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
				<meta charSet="utf-8" content="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content="第59回鈴鹿高専祭公式サイト" name="description" />
				<meta content="第59回 鈴鹿高専祭" property="og:title" />
				<meta content="第59回鈴鹿高専祭公式サイト" property="og:description" />
				<meta content="https://snct-fes.info" property="og:url" />
				<meta content="https://www.snct-fes.info/ogp.png" property="og:image" />
				<meta content="https://www.snct-fes.info/ogp.png" property="og:image:url" />
				<meta content="第59回 鈴鹿高専祭" property="og:image:alt" />
				<meta content="website" property="og:type" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content="第59回 鈴鹿高専祭" name="twitter:title" />
				<meta content="第59回鈴鹿高専祭公式サイト" name="twitter:description" />
				<meta content="https://www.snct-fes.info/ogp.png" name="twitter:image" />
				<meta content="第59回 鈴鹿高専祭" name="twitter:image:alt" />
				<meta content="@KOSENFESTA" name="twitter:site" />
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
				<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Jura:wght@300&family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;600&family=Roboto+Mono&display=swap" rel="stylesheet" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
				<link href="/favicon.ico" rel="icon" sizes="any" />
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
