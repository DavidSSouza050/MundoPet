import { cleanForm } from "../../utils/clean-form"

const openModal = document.getElementById("open-modal")
const modal = document.getElementById("modal")
const modalContainer =  document.getElementById("modal-container")


// Campos da formulário
const nameTutor = document.getElementById("tutor-name")
const namePet = document.getElementById("pet-name")
const telTutor = document.getElementById("phone-number")
const descService = document.getElementById("desc-service")
const selectedDate = document.getElementById("date-schedule")
const selectedHour = document.getElementById("time-schedule")


// Abrir e fechar modal que está o form
openModal.onclick = () => {
  modalContainer.classList.remove("hidden")
}

modalContainer.onclick = () =>{
  // Ao clicar na parte de fora da modal, ela irá fechar
  modalContainer.classList.add("hidden")
  cleanForm({nameTutor, namePet, telTutor,descService, selectedDate})
}

modal.onclick = (event) => {
  // parando a propagação do click, para utilizar o form sem fechar a modal
  event.stopPropagation()
}


