const data = document.getElementById("dataContainer")
pokeLeght = 12
for(i = 0;i < pokeLeght;i++){
    var card = document.createElement("div")
        card.setAttribute("class","base");
        data.appendChild(card)
}
