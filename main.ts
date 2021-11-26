import { cron } from "./deps.ts";

cron("* * * * * *", () => {
  console.log("hello");
});
