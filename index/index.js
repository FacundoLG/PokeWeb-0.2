const data = document.getElementById("dataContainer")
var pokeLeght = 4
for(i = 1;i <= pokeLeght;i++){
    //ApiCode
    const URL = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(URL)
        .then(response => response.json())
        .then(datos =>{
            console.log(datos)
            var especie = datos.species.name
            var tipo1 = datos.types[0].type.name
            var tipo2 = datos.types[1].type.name
            var imgSrc = datos.sprites.front_default
            pokename.innerHTML = especie
            pokeElement1.innerHTML = tipo1
            pokeElement2.innerHTML = tipo2
            pokeImage.setAttribute("src",`${imgSrc}`)
        })
    //DOM creation 
    //Base car creation

    var card = document.createElement("div")
        card.setAttribute("class","base");
        card.setAttribute("id",`number${i}`)
        data.appendChild(card)
    //Image Creation
    var base = document.getElementById(`number${i}`)    
    
    var baseImage = document.createElement("div")
        baseImage.setAttribute("class","base-image")
        baseImage.setAttribute("id",`image${i}`)
        base.appendChild(baseImage)

    var pokeImageContainer = document.getElementById(`image${i}`)

    var pokeImage = document.createElement("img")
        pokeImage.setAttribute("class","pokeImage")
        //pokeImage.setAttribute("src","../src/Pokemones/bulbasaur.png")//image
        pokeImageContainer.appendChild(pokeImage)
    
    //Card Name and Element
    var dato = document.createElement("div")
        dato.setAttribute("class","pokeData")
        dato.setAttribute("id",`cardName${i}`)
        base.appendChild(dato)

    var cardname = document.getElementById(`cardName${i}`)

    var pokename = document.createElement("p")
        pokename.setAttribute("class","pokeName")
        pokename.setAttribute("id",`name${i}`)
        // pokename.innerHTML = "Bulbasur" //pokemon name
        cardname.appendChild(pokename)
    
    var pokeElement1 = document.createElement("p")
        pokeElement1.setAttribute("class","pokeElement")
        // pokeElement1.setAttribute("src","../src//Elements/Icon_Electrico.png") //Element 1
        cardname.appendChild(pokeElement1)

    var pokeElement2 = document.createElement("p")
        pokeElement2.setAttribute("class","pokeElement")
        // pokeElement2.setAttribute("src","../src//Elements/Icon_Electrico.png") //Element 2
        cardname.appendChild(pokeElement2)
    

}
