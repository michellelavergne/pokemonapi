//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        
        pokeStore.push(data.types[0].type.name)
        document.querySelector('#name').innerText = data.name.toUpperCase()
        document.querySelector('#weight').innerText = `${data.weight} kg`
        document.querySelector('#type').innerText = pokeStore[0]
        pokeImg.push(data.sprites.front_shiny)
        document.querySelector('#pokeImg1').src = data.sprites.front_shiny
        document.querySelector('#height').innerText = `${data.height} ft`
        document.querySelector('#ability').innerText = data.abilities[0].ability.name
        document.querySelector('label').style.display = toggle
        
        
        
        
        // fetch(url2)
        // .then(res => res.json()) // parse response as JSON
        // .then(data => {

        //   pokeStore.push(data.types[0].type.name)
        //   pokeImg.push(data.sprites.front_shiny)
      
        //   if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
        //     
        //     document.querySelector('#pokeImg2').src = pokeImg[1]
        //     document.querySelector('h2').innerText = " 2x > "
        //   }
        // })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}