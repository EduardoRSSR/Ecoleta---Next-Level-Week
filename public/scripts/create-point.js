const collectedItems=document.querySelector("input[name=items]");

function populateUFs(){
    const ufselect = document.querySelector("select[name=uf]"); 


    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

.then(response => response.json()).then(states => {
    
    
    for (state of states){
    ufselect.innerHTML+= (`<option value="${state.id}">${state.nome}</option>`)  
}    
})


.catch(function(){
    console.log('algo errado');
})
}   

populateUFs();


function populatecities(event){

  var citySelect = document.querySelector("select[name=city]"); 

  var stateinput = document.querySelector("input[name=state]");
  

 var indexOfstate = event.target.selectedIndex
 stateinput.value = event.target.options[indexOfstate].text;
 //stateinput.value = event.target.options[event.target.selectedIndex].text;

  citySelect.disabled=true;
  citySelect.innerHTML ='<option value="">Selecione a Cidade</option>'


fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)


.then(response => response.json()).then(cities => {
 

    for (city of cities){
    citySelect.innerHTML+= (`<option value="${city.nome}">${city.nome}</option>`)  
} 
citySelect.disabled=false;

})
}


document
        .querySelector("select[name=uf]")
        .addEventListener("change", populatecities)


const itemstoCollect = document.querySelectorAll(".items-grid li");

for(var item of itemstoCollect){
    item.addEventListener("click", clickonItem);
}     


let selectedItems = [];

function clickonItem(event){
    var itemLi = event.target; // item clicado
    var itemId = itemLi.dataset.id;  //id do item clicado
    
    
    itemLi.classList.toggle("selected"); // adiciona/remove classe selected
    
    // adicionar itens a um vetor para controle
    var itemVerify=selectedItems.indexOf(itemId);

    if(itemVerify==-1){
    selectedItems.push(itemId);
    }else{
        selectedItems.splice(`${itemVerify}`,1)
    }

    collectedItems.value=selectedItems;
}

