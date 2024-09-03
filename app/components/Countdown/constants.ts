import { Temporal } from "temporal-polyfill";

export const COUNTDOWN_INTERVAL = 1000;
export const COUNTDOWN_END_AT = Temporal.ZonedDateTime.from({ day: 2, hour: 0, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 });
