const app = document.querySelector(".app");
const API_KEY = '857bd5f34f2e41c27fe8e87e4f8e703a';
const API_ID = 'd24ee147';


fetch(`https://api.edamam.com/search?q=rice&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30&`)
.then(response => response.json())
// .then(data => console.log(data.hits))
.then(data => showData(data.hits))
// showData(data.hits)
showData = data => {
  const dataContainer = document.querySelector(".app");
  
  data.forEach(data => {
    const card = document.createElement('div');
    card.className = "card";

    const foodImg = document.createElement('img');
    foodImg.src = `${data.recipe.image}`;
    

    const foodName = document.createElement('h3');
    foodName.innerText = ` ${data.recipe.label}`;
    

    const foodCal = document.createElement('p');
    foodCal.innerText = `Calories: ${data.recipe.calories.toFixed(2)}`;

    const foodUrl = document.createElement('a');
    let link = document.createTextNode("View Recipe Here");
    foodUrl.appendChild(link);
    foodUrl.title = "View Recipe Here";
    foodUrl.href = ` ${data.recipe.url}`;
    

    card.appendChild(foodImg);
    card.appendChild(foodName);
    card.appendChild(foodCal);
    card.appendChild(foodUrl);
    dataContainer.appendChild(card);
    // dataContainer.appendChild(foodUrl);
  })
}


// fetch(`https://rickandmortyapi.com/api/character/`)
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));

// showCharacters = characters => {
//   const characterDiv = document.querySelector(".app");

//   characters.forEach(character => {
//     const characterElement = document.createElement('p');
//     characterElement.innerText = `character name: ${character.name}`;
//     characterDiv.append(characterElement);
//     const charactertext = document.createElement('p');
//     charactertext.innerText = `character id: ${character.id}`;
//     characterDiv.append(charactertext);
    
//   });
// }