import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, tutor, pet, tel, service, when}) {
  try{
    
    // Criando conexão com o servidor para realizar o cadastro do agendamento da API
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({id, tutor, pet, tel, service, when})
    })


    alert("Agendamento realizado com sucesso!")
  }catch (error){
    console.log(error)    
    alert("Não foi possível agendar, tente novamente mais tarde!")
  }
}