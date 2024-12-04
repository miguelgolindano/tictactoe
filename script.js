

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 100)
  return computerChoice
}

function getHumanChoice() {
  let humanChoice = prompt('Your Choice', 'Here you can enter your choice')
}

console.log(getComputerChoice());
console.log(getHumanChoice());