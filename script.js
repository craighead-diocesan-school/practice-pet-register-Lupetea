let animalName = [
  { name: "Blinkey", age: 5, species: "sheep" },
  { name: "Piper", age: 6, species: "Dog" },
  { name: "Lola", age: 7, species: "cat" },
  { name: "Rudy", age: 3, species: "rabbit" },
]

function addName() {
  let name = prompt("Give me a  name")
  let age = prompt("What is the age of your pet")
  let species = prompt("What is the age of your pet?")
  let pet = {
    name: name,
    age: age,
    species: species,
  }
  animalName.push(newName)
}
function findPet() {
  let searchtarget = prompt("Which pet do you want to find?")
  let searchResult = false

  for (let currentNumber of animal) {
    if (currenumber === Number(searchAnimal)) searchResult = true
  }
}

if ((searchResult = true)) {
  alert(searchAnimal + "was found")
} else {
  alert(searchAnimal + "was not found")
}

alert(searchAnimal + "found:" + searchResult)

function removeName() {
  let index = prompt("What name do you want to remove?")
  animalName.splice(removeName)
}
