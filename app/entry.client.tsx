import { useGSAP } from "@gsap/react";
import { RemixBrowser } from "@remix-run/react";
import gsap from "gsap";
import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";

gsap.registerPlugin(useGSAP);

startTransition(() => {
	hydrateRoot(
		document,
		<StrictMode>
			<RemixBrowser />
		</StrictMode>,
	);
});
