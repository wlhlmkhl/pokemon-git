const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

//Deklarera & definiera variabler
let pokemonCards = document.querySelector("#pokemonCards");

let submitBtn = document.querySelector("#submitBtn");

//Lägg in värdena i objekt

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let newPokemon = {};

  let name = document.querySelector("#name");
  let height = document.querySelector("#height");
  let weight = document.querySelector("#weight");
  let type = document.querySelector("#type");
  let url = document.querySelector("#url");

  newPokemon.name = name.value;
  newPokemon.height = height.value;
  newPokemon.weight = weight.value;
  newPokemon.type = type.value;
  newPokemon.url = url.value;

  console.log(newPokemon);

  PokedexData.push(newPokemon);
  showPokemon(PokedexData);
});

//Pokemons som visas direkt
let showPokemon = (array) => {

 array.forEach((pokemon) => {
  let card = document.createElement("div");
  card.classList.add("pokemonCard");
  let img = document.createElement("img");
  img.src = pokemon.url;
  pokemonCards.append(img);
  let info = document.createElement("div");
  let text = document.createElement("p");
  text.innerText = `Name: ${pokemon.name}
  Height: ${pokemon.height} feet
  Weight: ${pokemon.weight} lbs
  Type: ${pokemon.type}
  `;
  
  pokemonCards.append(card);
  card.append(img, info)
  info.append(text);
});
  
};
showPokemon(PokedexData);

//Filtrera med checkboxar
let checkBoxes = document.querySelectorAll("[name = 'type']");
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    pokemonCards.innerHTML = "";

    let selectedTypes = document.querySelectorAll("[name='type']:checked");
    let pickedTypes = [];
    selectedTypes.forEach((box) => {
      pickedTypes.push(box.value);
    });

    let filteredPokemons = PokedexData.filter((pokemon) => {
      return pickedTypes.includes(pokemon.type);
    });
    showPokemon(filteredPokemons);
  });
});
