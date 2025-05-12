import {  schedulesDayFilter } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll('.period')

// Gerando o evento de click para o link de cancelamento
periods.forEach(period => {
  // capturando o evento na lista de agendamentos
  period.addEventListener("click", async (event) => {
    
    // Validando se o alvo do click do cancelamento tem a class de cancelar
    if(event.target.classList.contains("cancel")){
      //  Obtendo a li do elemento do pai 
      const item = event.target.closest("li")

      // pegando o id do agendamento
      const { id } = item.dataset
      console.log(item.dataset)
      // confirma o id selecionado
      if(id){
        // Confirmando se realmente deseja cancelar o agendamento
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

        if(isConfirm){
          // realiza a requisição para cancelar o agendamento
          await scheduleCancel({ id })
          // recarrega a lista de agendamentos
          schedulesDayFilter()
        }
      }

    }
  })

})