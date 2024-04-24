import { globalLayer } from "@vanilla-extract/css";

export const reset = globalLayer("reset");
export const component = globalLayer("component");
export const componentBase = globalLayer({ parent: component }, "base");
export const layout = globalLayer("layout");
export const page = globalLayer("page");
