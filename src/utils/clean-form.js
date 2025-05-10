import { schedulesDay } from "../modules/schedules/load.js"
import { Today } from "./today.js"

export function cleanForm({nameTutor, namePet, telTutor,descService, selectedDate}){
  // Limpando os campos ao fechar a modal
  nameTutor.value = ""
  namePet.value = ""
  telTutor.value = ""
  descService.value = ""
  selectedDate.value = Today()
  schedulesDay()
}