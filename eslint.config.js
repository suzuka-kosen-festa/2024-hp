// @ts-check
import { re_taro } from "@re-taro/eslint-config";

export default re_taro({
	formatters: true,
}, {
	files: ["app/**/*.tsx"],
	rules: {
		"react-dom/no-dangerously-set-innerhtml": "off",
	},
});
