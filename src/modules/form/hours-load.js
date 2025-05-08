import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
const selectedHour = document.getElementById("time_schedule")

export function hoursLoad({ date }){
  // Limpa a lista de horários
  selectedHour.innerHTML = ""

  // Validando se a data e horário está disponível no momento
  const opening = openingHours.map((hour) => {

    // Recuperando somente a hora
    const [scheduleHour] = hour.split(":")
    
    // pegando a data atual e adicionando a hora
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    // Validando se o horário está disponível para o uso no agendamento
    // const available = !unavailableHours.includes(hour) && !isHourPast

    return{
      hour,
      available: !isHourPast
    }
  })

  // criando as options para ser colocado na select onde está os horários de agendamento
  opening.forEach(({hour, available}) =>{
    const option = document.createElement("option")

    option.value = hour
    option.textContent = hour

    selectedHour.append(available ? option : "")
  })

}