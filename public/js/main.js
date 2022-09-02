const deleteBtn = document.querySelectorAll('.del')
const studyItem = document.querySelectorAll('span.not')
const studyComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteStudy)
})

Array.from(studyItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(studyComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteStudy(){
    const studyId = this.parentNode.dataset.id
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
    const studyId = this.parentNode.dataset.id
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
    const studyId = this.parentNode.dataset.id
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