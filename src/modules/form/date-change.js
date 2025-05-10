import { Today } from "../../utils/today.js"
import { schedulesDay, schedulesDayFilter } from "../schedules/load.js"

// Seleciona o input de data do form
const selectedDate = document.getElementById("date-schedule")

const selectedDateFilter = document.getElementById("date-filter")

// Colocando a data atual na selectDateFilter
selectedDateFilter.value = Today()

// Recarrega a lista de horários quando o input de data mudar

selectedDate.onchange = () => schedulesDay()

selectedDateFilter.onchange = () => schedulesDayFilter()