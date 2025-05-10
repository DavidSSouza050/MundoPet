import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}) {

  try{
    // Fazendo a requisição para buscar os agendamentos
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    // transformando a resposta em json
    const data = await response.json();

    // fazendo o filtro para buscar o agendamento realizado no dia
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  }catch(error){
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
  
}