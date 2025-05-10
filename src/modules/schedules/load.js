import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

// Seleciona o input de data para validar os horários disponíveis
const selectedDateRegister = document.getElementById("date-schedule")

// Seleciona a input date filter
const selectedDateFilter = document.getElementById("date-filter")

export async function schedulesDay(){

  // obtém a data do input de cadastro do agendamento
  const date = selectedDateRegister.value

  // Buscando os horários já cadastrados na api
  const dailySchedules = await scheduleFetchByDay({date})

  // Renderiza as horas disponíveis
  hoursLoad({date, dailySchedules})
}

export async function schedulesDayFilter() {

  // obtém a data do input de filtrar o agendamento do agendamento
  const date = selectedDateFilter.value
  // Buscando os horários já cadastrados na api
  const dailySchedules = await scheduleFetchByDay({date})

  schedulesShow({dailySchedules});
}