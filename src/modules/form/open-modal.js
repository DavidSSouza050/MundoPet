const openModal = document.getElementById("open_modal")
const modal = document.getElementById("modal")
const modalContainer =  document.getElementById("modal_container")


// Campos da formulário
const nameTutor = document.getElementById("tutor_name")
const namePet = document.getElementById("pet_name")
const telTutor = document.getElementById("phone_number")
const descService = document.getElementById("desc_service")
const selectedDate = document.getElementById("date_schedule")
const selectedHour = document.getElementById("time_schedule")


// Abrir e fechar modal que está o form
openModal.onclick = () => {
  modalContainer.classList.remove("hidden")
}

modalContainer.onclick = () =>{
  // Ao clicar na parte de fora da modal, ela irá fechar
  modalContainer.classList.add("hidden")
  cleanForm()
}

modal.onclick = (event) => {
  // parando a propagação do click, para utilizar o form sem fechar a modal
  event.stopPropagation()
}


function cleanForm(){
  // Limpando os campos ao fechar a modal
  nameTutor.value = ""
  namePet.value = ""
  telTutor.value = ""
  descService.value = ""
}