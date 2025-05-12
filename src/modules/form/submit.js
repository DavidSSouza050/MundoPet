import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { Today } from "../../utils/today.js"
import { cleanForm } from "../../utils/clean-form.js"
import { schedulesDayFilter } from "../schedules/load.js"

// Elementos do formulário
const form = document.querySelector("form")
const nameTutor = document.getElementById("tutor-name")
const namePet = document.getElementById("pet-name")
const telTutor = document.getElementById("phone-number")
const descService = document.getElementById("desc-service")
const selectedDate = document.getElementById("date-schedule")
const selectedHour = document.getElementById("time-schedule")


const modalContainer =  document.getElementById("modal-container")

//  Data atual para formatar a input date com a data atual
const inputToday = Today()

// Definindo a data atual para realizar o agendamento
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  // Previne o comportamento padrão do formulário (recarregar a pagina)
  event.preventDefault()

  try {
    // Recuperando os dados da input
    const tutor = nameTutor.value.trim()
    const pet = namePet.value.trim()
    const tel = telTutor.value.trim()
    const service = descService.value.trim()

    // Segunda verificação de campos preenchidos
    if(inputEmpty()){
      alert("Preencha todos os campos!")
    }

    // Pegando apenas o horário selecionado
    const [hour] = selectedHour.value.split(":")
    
    // inserindo o horário com a data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    

    // Gerando o ID
    const id = new Date().getTime()

    // cadastrando a agendamento
    await scheduleNew({
      id, 
      tutor,
      pet,
      tel,
      service,
      when
    })
  
    modalContainer.classList.add("hidden")
    cleanForm({nameTutor, namePet, telTutor,descService, selectedDate})
    schedulesDayFilter()

  } catch (error) {
    alert("Não foi possível realizar o agendamento!")
    console.log(error)
  }
}

// Verificando todos os campos e validando se está vazio ou não
function inputEmpty(){
  const inputs = form.querySelectorAll("input, textarea, select")
  return [...inputs].every(input => input.value.trim() === "")
}