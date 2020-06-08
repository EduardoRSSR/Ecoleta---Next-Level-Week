
document
        .querySelector('#openSearch')
        .addEventListener("click", searchToggle)


document
        .querySelector('#closeSearch')
        .addEventListener("click", searchToggle)
        
function searchToggle(){
    console.log('clicou')
    document.getElementById("modal").classList.toggle("hide");
}
