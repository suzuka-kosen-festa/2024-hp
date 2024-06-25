import { useEffect, useLayoutEffect } from "react";

export const useEnhancedEffect
	= typeof window === "undefined" ? useEffect : useLayoutEffect;
