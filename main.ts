import { cron } from "./deps.ts";

cron("* 3 21 * * *", () => {
  console.log("hello");
});
