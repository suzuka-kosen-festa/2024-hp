import { globalLayer } from "@vanilla-extract/css";

export const reset = globalLayer("reset");
export const base = globalLayer("base");
export const feature = globalLayer("feature");
export const component = globalLayer({ parent: feature }, "base");
export const layout = globalLayer("layout");
export const page = globalLayer("page");
