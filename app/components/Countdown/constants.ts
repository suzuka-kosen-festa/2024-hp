import { Temporal } from "temporal-polyfill";

export const COUNTDOWN_INTERVAL = 1000;
export const COUNTDOWN_END_AT = Temporal.ZonedDateTime.from({ year: 2024, month: 11, day: 2, hour: 0, minute: 0, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo") });
