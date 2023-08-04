let pets = [
  { name: "Blinkey", age: 5, species: "sheep" },
  { name: "Piper", age: 6, species: "Dog" },
  { name: "Lola", age: 7, species: "cat" },
  { name: "Rudy", age: 3, species: "rabbit" },
]

function showPet() {
  for (let pet of pets) {
    alert(pet.name)
  }
}

function addName() {
  let name = prompt("Pet name?")
  let age = prompt("Pets age?")
  let species = prompt("Pet species?")

  //create a pet with the details
  let pets = {
    name: name,
    age: age,
    species: species,
  }
}
pets.push(pet)

function removeName() {
  let index = 0
  for (let pet of pets) {
    alert(index + ":" + pet.name)
  }
}
let indextoRemove = prompt("What pet do you want ot remove?")

pets.splice(indextoRemove, 1)

function searchPet() {
  let petToSearchFor = "Which pet do you wish to find?"

  let searchResult = false

  for (let pet of pets) {
    if (pet.name == petToSearchFor) {
      searchResult = true
    }
  }

  if ((searchResult = true)) {
    alert("Found the pet!")
  } else {
    alert("Did not find pet!")
  }
}
