import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data para validar os horários disponíveis
const selectedDate = document.getElementById("date_schedule")
export function schedulesDay(){

  // obtém a data do input
  const date = selectedDate.value

  // Renderiza as horas disponíveis
  hoursLoad({date})
}