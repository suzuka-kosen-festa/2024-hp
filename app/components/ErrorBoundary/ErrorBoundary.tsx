import type { ReactNode } from "react";
import { Suspense, useEffect } from "react";
import { Link, isRouteErrorResponse } from "@remix-run/react";
import { ErrorTitle } from "../ErrorTitle";

interface Props {
	error: unknown;
}

export function ErrorBoundary({ error }: Props): ReactNode {
	useEffect(() => {
		const id = setTimeout(() => {
			window.location.reload();
		}, 60 * 1000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	const handleReload = () => {
		window.location.reload();
	};

	if (isRouteErrorResponse(error)) {
		return (
			<main
				style={{
					display: "grid",
					height: "100dvh",
					padding: "1rem",
					placeItems: "center",
					width: "100%",
				}}
			>
				<div
					style={{
						display: "grid",
						gap: "1rem",
						maxWidth: "80ch",
						placeItems: "center",
					}}
				>
					<Suspense fallback={<h1>{`${error.status} | ${error.statusText}`}</h1>}>
						<ErrorTitle title={`${error.status} | ${error.statusText}`} />
					</Suspense>
					<Link
						style={{
							border: "1px solid #FFFFFF",
							borderRadius: "0.5rem",
							color: "#FFFFFF",
							fontFamily: "DotGothic16, sans-serif",
							fontSize: "1.5rem",
							padding: "0.5rem 1rem",
						}}
						to="/"
					>
						トップページへ戻る
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main
			style={{
				display: "grid",
				height: "100dvh",
				padding: "1rem",
				placeItems: "center",
				width: "100%",
			}}
		>
			<div
				style={{
					display: "grid",
					gap: "1rem",
					maxWidth: "80ch",
					placeItems: "center",
				}}
			>
				<Suspense fallback={<h1>エラーが発生したようです</h1>}>
					<ErrorTitle title="エラーが発生したようです" />
				</Suspense>
				<button
					style={{
						border: "1px solid #FFFFFF",
						borderRadius: "0.5rem",
						color: "#FFFFFF",
						fontFamily: "DotGothic16, sans-serif",
						fontSize: "1.5rem",
						padding: "0.5rem 1rem",
					}}
					onClick={handleReload}
					type="button"
				>
					再読み込み
				</button>
			</div>
		</main>
	);
}
