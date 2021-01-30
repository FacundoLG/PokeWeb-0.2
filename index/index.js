const data = document.getElementById("dataContainer")
pokeLeght = 13
for(i = 0;i < pokeLeght;i++){
    var card = document.createElement("div")
        card.setAttribute("class","base");
        card.setAttribute("id",`number${i}`)
        data.appendChild(card)
    var base = document.getElementById(`number${i}`)    
    var baseImage = document.createElement("div")
        baseImage.setAttribute("class","base-image")
        base.appendChild(baseImage)
    var dato = document.createElement("div")
        dato.setAttribute("class","pokeData")
        base.appendChild(dato)
}
