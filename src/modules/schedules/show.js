import dayjs from "dayjs"

const periodMorning = document.getElementById("morning-period")
const periodAfternoon = document.getElementById("afternoon-period")
const periodNight = document.getElementById("night-period")


export function schedulesShow({dailySchedules}){

  try{
    // Limpando as listas de horários
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""
    
    dailySchedules.forEach((schedule) => {
      // Criando elementos para exibir os  dados
      const item = document.createElement("li")
      const content = document.createElement("div")
      const time = document.createElement("strong")
      const namePet = document.createElement("span")
      const nameTutor = document.createElement("span")
      const pService = document.createElement("p")
      const pCancel = document.createElement("p")

      // Criando a barra para ser colocado antes do nome do tutor
      const slash = document.createElement("span")
      slash.textContent = "/"

      // Adicionando o id no item
      item.setAttribute("data-id", schedule.id)

      // Adicionando o horário do agendamento
      time.textContent = dayjs(schedule.when).format("HH:mm")

      // Adicionando o nome e class do nome do pet
      namePet.classList.add("pet-name")
      namePet.textContent = schedule.pet

     
      // Adicionando o nome e class do nome do tutor
      nameTutor.classList.add("tutor-name")
      nameTutor.textContent = schedule.tutor

      // Adicionando paragrafo de serviço
      pService.classList.add("service")
      pService.textContent = schedule.service

      // Adicionando paragrafo de cancelamento do agendamento
      pCancel.classList.add("cancel")
      pCancel.textContent ="Remover agendamento"

      // Colocando os elementos na div content
      content.append(time, namePet, slash, nameTutor)

      // Colocando os elementos criados na li
      item.append(content, pService, pCancel)

      // Capturando a hora para verificar onde o agendamento se encaixa
      const hour = dayjs(schedule.when).format("HH")

      // Renderiza os elementos dentro do período correto
      if(hour <= 12){
        periodMorning.appendChild(item)
      }else if(hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      }else{
        periodNight.appendChild(item)
      }

    })

  }catch (error){
    console.log(error)
    alert("Não foi possível exibir os agendamentos.")
  }
}