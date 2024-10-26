export const onRequest: PagesFunction<Env> = async (context) => {
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
	else if (url.pathname === "/lol") {
		return Response.redirect(context.env.URL, 302);
	}

	return context.next();
};
