import { schedulesDay, schedulesDayFilter } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", () => {
  schedulesDayFilter()
  schedulesDay()
})