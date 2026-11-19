const result = document.querySelector('.result')
const humanScore = document.querySelector ('#human-score')
const machineScore = document.querySelector ('#machine-score')

const humanChoiceDisplay = document.querySelector('.your-choice')
const machineChoiceDisplay = document.querySelector('.machine-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0

const formatChoice = (choice) => {
    if (choice === 'rock') return '&#x1F44A Pedra'
    if (choice === 'scissors') return '&#x270C Tesoura'
    if (choice === 'paper') return '&#x1F590 Papel'
}

const playHuman = (choice) => {

    playTheGame(choice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'scissors', 'paper']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    humanChoiceDisplay.innerHTML = `Você jogou: <strong>${formatChoice(human)}</strong>`
    machineChoiceDisplay.innerHTML = `A máquina jogou: <strong>${formatChoice(machine)}</strong>`

    humanChoiceDisplay.style.color = '#3f8efb'
    machineChoiceDisplay.style.color = '#ee866a'

    if (human === machine) {
        result.innerHTML = 'Deu empate! &#x1F610'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou! &#x1F601'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu! &#x1F622'
    }
}
