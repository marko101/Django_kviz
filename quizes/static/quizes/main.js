console.log("Zdarvo JavaScript!")

const modalBtns = [...document.getElementsByClassName('modal-button')] //pravim arayy i hvatam modal-button iz main.html//
const modalBody =document.getElementById('modal-body-confirm')
const startBtn =document.getElementById('start-button')

const url = window.location.href //ovo ide na kraju. hvata url adresu

modalBtns.forEach(modalBtn=> modalBtn.addEventListener('click', ()=>{
    const pk = modalBtn.getAttribute('data-pk')
    const name = modalBtn.getAttribute('data-quiz')
    const numQuestions = modalBtn.getAttribute('data-questions')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const scoreToPass = modalBtn.getAttribute('data-pass')
    const time = modalBtn.getAttribute('data-time')
    
    modalBody.innerHTML = `
        <div class="h5 mb-3">Da li ste sigurni da hoćete da počnete "<b>${name}</b>"?</div>
        <div class="text-muted">
        <ul>
            <li>Težina: <b>${difficulty}</b></li>
            <li>Broj pitanja: <b>${numQuestions}</b></li>
            <li>poeni za prolaz: <b>${scoreToPass}</b></li>
            <li>vreme: <b>${time}</b></li>
        </ul>
        </div>
    `

    startBtn.addEventListener('click', ()=>{
        window.location.href = url + pk
    })

}))
    