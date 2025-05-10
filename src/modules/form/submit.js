import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

// Elementos do formulário
const form = document.querySelector("form")
const nameTutor = document.getElementById("tutor_name")
const namePet = document.getElementById("pet_name")
const telTutor = document.getElementById("phone_number")
const descService = document.getElementById("desc_service")
const selectedDate = document.getElementById("date_schedule")
const selectedHour = document.getElementById("time_schedule")

//  Data atual para formatar a input date com a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

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
    const [hour] = selectedHour.innerText.split(":")
    
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