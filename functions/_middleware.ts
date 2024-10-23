export const onRequest: PagesFunction = async (context) => {
	const { request } = context;
	const url = new URL(request.url);
	const referer = request.headers.get("Referer");
	const host = request.headers.get("Host");
	if (referer) {
		const refererUrl = new URL(referer);
		if (host && referer.includes(host) && refererUrl.pathname !== "/" && url.pathname === "/top.data") {
			return new Response(JSON.stringify({
				originalUrl: url.toString(),
				redirectTo: "/lol",
				type: "remix-redirect",
			}), {
				headers: {
					"Content-Type": "application/json",
					"X-Remix-Redirect": "true",
				},
			});
		}
	}

	return context.next();
};
