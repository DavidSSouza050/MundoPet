import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
const selectedHour = document.getElementById("time-schedule")

export function hoursLoad({ date, dailySchedules}){
  // Limpa a lista de horários
  selectedHour.innerHTML = ""

  // Valida os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  // Validando se a data e horário está disponível no momento
  const opening = openingHours.map((hour) => {

    // Recuperando somente a hora
    const [scheduleHour] = hour.split(":")
    
    // pegando a data atual e adicionando a hora
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    // Validando se o horário está disponível para o uso no agendamento
    // obs: foi colocado o ternário dentro do include, pois com um digito a menos as 9 horas, não estava sendo possível realizar a busca corretamente
    const available = !unavailableHours.includes(hour === "9:00" ? "09:00" : hour) && !isHourPast

    return{
      hour,
      available
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