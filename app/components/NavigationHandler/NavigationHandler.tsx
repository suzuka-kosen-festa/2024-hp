import type { ReactNode } from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

interface RedirectData {
	originalUrl: string;
	redirectTo: string;
	type: "remix-redirect";
}

export function NavigationHandler(): ReactNode {
	const navigate = useNavigate();

	const handleRedirect = useCallback((redirectData: RedirectData) => {
		navigate(redirectData.redirectTo, {
			replace: false,
			state: {
				originalUrl: redirectData.originalUrl,
				redirected: true,
			},
		});
	}, [navigate]);

	useEffect(() => {
		const interceptNavigation = async (response: Response) => {
			if (response.headers.get("X-Remix-Redirect")) {
				try {
					const data = await response.json() as RedirectData;
					if (data.type === "remix-redirect") {
						handleRedirect(data);
						return new Response(null, { status: 204 });
					}
				}
				catch (e) {
					console.error("Failed to process redirect:", e);
				}
			}
			return response;
		};

		const originalFetch = window.fetch;
		window.fetch = async (...args) => {
			const response = await originalFetch(...args);
			return interceptNavigation(response);
		};

		return () => {
			window.fetch = originalFetch;
		};
	}, [handleRedirect]);

	return null;
}
