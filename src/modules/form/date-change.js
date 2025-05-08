import { schedulesDay } from "../schedules/load.js"

// Seleciona o input de data do form
const selectedDate = document.getElementById("date_schedule")

// Recarrega a lista de horários quando o input de data mudar

selectedDate.onchange = () => schedulesDay()