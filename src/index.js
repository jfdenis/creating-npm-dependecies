const messages = [
    'Julio',
    'Ana',
    'Fernanda',
    'Abril',
    'Michel',
    'Betty',
    'Victoria',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {
    randomMsg
}