const deleteBtn = document.querySelectorAll('.del')
const studyComplete = document.querySelectorAll('span.mark-complete')
const studyIncomplete = document.querySelectorAll('span.mark-incomplete')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteStudy)
})

Array.from(studyComplete).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(studyIncomplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteStudy(){
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/deleteStudy', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

const truncator = function (str, len) {
    if (str.length > len && str.length > 0) {
        let new_str = str + ' '
        new_str = str.substr(0, len)
        new_str = str.substr(0, new_str.lastIndexOf(' '))
        new_str = new_str.length > 0 ? new_str : str.substr(0, len)
        return new_str + '...'
    }
    return str
}

// Get modal element
var modal = document.getElementById('simpleModal');
var modalBtns = document.getElementsByClassName('modal-test')
var cardclicks = document.getElementsByClassName('card-clicker')
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// modals.forEach(el => el.addEventListener('click', openModal)) 
Array.from(modalBtns).forEach((el)=>{
    el.addEventListener('click', openModal)
})

Array.from(cardclicks).forEach((el)=>{
    el.addEventListener('click', openModal)
})



// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Open modal
function openModal(){
  modal.style.display = 'block';
}

// Close modal
function closeModal(){
  modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}