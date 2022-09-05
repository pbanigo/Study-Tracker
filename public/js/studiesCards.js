// Get modal element for add study card only
let modal = document.getElementById('simpleModal');
// Get modal elements for individual study cards
let modals = document.querySelectorAll('.modal-overlay-card')

// target study cards to click open individual modals - this is also whats making it difficult to close modals :(
let cardclicks = document.querySelectorAll('.study-open-button')
// Get open modal button for add study card
let modalBtn = document.getElementById('modalBtn');

// Get close buttons
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let closeButtons = document.querySelectorAll('.closeBtn');


// OPEN MODALS //
// Listen for open modal click on Add study card
modalBtn.addEventListener('click', openModal);
// listen for open modal click on individual study cards
cardclicks.forEach((el)=>{
    el.addEventListener('click', openModalCard)
})

// Open modal on Add Study card only
function openModal(){
    modal.style.display = 'block';
}
// Open Modal on individual study cards
function openModalCard(){    // oh my god it finally works
  console.log('open zee modal');
  console.log(this);
  this.nextElementSibling.style.display = 'block';
    // this.lastElementChild.children[4].style.display = 'block';
}


// CLOSE MODALS //
// Listen for outside click
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClickCard);

// Listen for close click
closeButtons.forEach(el => el.addEventListener('click', closeModal))
// Close modal for both add study note and individual cards
function closeModal(){
  // modal.style.display = 'none';
  this.parentNode.parentNode.parentNode.style.display = 'none';  // this works technically, but the modal is being immediately opened again by openModalCard
}

// Click outside and close for add notes only
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

// wow
function outsideClickCard(e){
  for(let i = 0; i < modals.length; i++){
      if(e.target == modals[i]) {modals[i].style.display = 'none';}
  }
}



function formUpdate() {
  let formValue = document.querySelector('#modal-input-title').value;
  console.log(formValue);
}