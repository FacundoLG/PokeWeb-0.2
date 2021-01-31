
var pokeLeght = 50
for(let i = 1;i <= pokeLeght;i++){
    //ApiCode
    const URL = `https://pokeapi.co/api/v2/pokemon/${i}`
    
    async function pokesolicitud(){
        const response = await fetch(URL)
        const datos = await response.json()

        return datos
    }
    document.addEventListener("DOMContentLoaded", async () =>{
        let datos = []
       
        try{
             datos = await pokesolicitud();
        }
        catch (err){
            console.log("Error")
            console.log(err)
        }
        
        console.log(datos)   
           await popo(datos,i)
    })
    //DOM creation 
    //Base car creation

}

function popo(datos,i){
    const data = document.getElementById("dataContainer")
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

    
    

        if(datos.types[0] && datos.types[1] ){
            var tipo1 = datos.types[0].type.name
            var tipo2 = datos.types[1].type.name
            
            var pokeElement2 = document.createElement("p")
            pokeElement2.setAttribute("class","pokeElement")
            cardname.appendChild(pokeElement2)
            
            
            pokeElement2.innerHTML = tipo2
        }else{
            var tipo1 = datos.types[0].type.name
        }   
    
        var especie = datos.name

        especie.charAt(0).toUpperCase()
        //var tipo2 = datos.types[1].type.name
        var imgSrc = datos.sprites.front_default
        pokename.innerHTML = especie
        pokeElement1.innerHTML = tipo1
        
        pokeImage.setAttribute("src",`${imgSrc}`)

       
 }
    

/* 
            console.log(datos)
            var especie = datos.species.name
            var tipo1 = datos.types[0].type.name
            var tipo2 = datos.types[1].type.name
            var imgSrc = datos.sprites.front_default
            pokename.innerHTML = especie
            pokeElement1.innerHTML = tipo1
            pokeElement2.innerHTML = tipo2
            pokeImage.setAttribute("src",`${imgSrc}`)
           */