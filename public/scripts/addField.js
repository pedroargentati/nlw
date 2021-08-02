document.querySelector("#add-time").addEventListener('click', cloneField) //procurar o botão 

function cloneField() { // executar uma ação 
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)     // duplicar os campos - que campo?
    const fields = newFieldContainer.querySelectorAll('input') // pegar os campos -- que campos?
    fields.forEach(function(field){ // pega o field do momento e limpa
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)   // colocar na página -- onde?
}   
