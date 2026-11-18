const result = document.querySelector('.result')

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())


}

const playMachine = () => {
    const choices = ['rock', 'scissors', 'paper']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate! &#x1F610'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        result.innerHTML = 'Você ganhou! &#x1F601'
    } else {
        result.innerHTML = 'Você perdeu! &#x1F622'
    }
}
