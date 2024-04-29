// Baraja de cartas
const SUITS = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
const RANKS = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Función para crear una baraja de cartas
function createDeck() {
    let deck = [];
    for (let suit of SUITS) {
        for (let rank of RANKS) {
            deck.push({ suit: suit, rank: rank });
        }
    }
    return deck;
}

// Función para mezclar la baraja de cartas
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Función para calcular el valor total de una mano
function calculateHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand) {
        if (card.rank === 'As') {
            aceCount++;
            value += 11;
        } else if (['J', 'Q', 'K'].includes(card.rank)) {
            value += 10;
        } else {
            value += parseInt(card.rank);
        }
    }
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
    }
    return value;
}

// Función para mostrar una mano de cartas
function displayHand(hand, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    for (let card of hand) {
        const cardElement = document.createElement('div');
        cardElement.textContent = `${card.rank} de ${card.suit}`;
        container.appendChild(cardElement);
    }
}

// Inicializar juego
let deck = createDeck();
shuffle(deck);

let dealerHand = [deck.pop(), deck.pop()];
let playerHand = [deck.pop(), deck.pop()];

displayHand(dealerHand, 'dealer-hand');
displayHand(playerHand, 'player-hand');

// Mostrar mensaje de resultado
function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

// Botón "Pedir carta"
document.getElementById('hit-button').addEventListener('click', function() {
    playerHand.push(deck.pop());
    displayHand(playerHand, 'player-hand');
    if (calculateHandValue(playerHand) > 21) {
        showMessage('¡Te pasaste! ¡Perdiste!');
    }
});

// Botón "Plantarse"
document.getElementById('stand-button').addEventListener('click', function() {
    while (calculateHandValue(dealerHand) < 17) {
        dealerHand.push(deck.pop());
    }
    displayHand(dealerHand, 'dealer-hand');
    if (calculateHandValue(dealerHand) > 21 || calculateHandValue(dealerHand) < calculateHandValue(playerHand)) {
        showMessage('¡Ganaste!');
    } else if (calculateHandValue(dealerHand) === calculateHandValue(playerHand)) {
        showMessage('¡Empate!');
    } else {
        showMessage('¡Perdiste!');
    }
});

// Botón "Reiniciar"
document.getElementById('reset-button').addEventListener('click', function() {
    deck = createDeck();
    shuffle(deck);
    dealerHand = [deck.pop(), deck.pop()];
    playerHand = [deck.pop(), deck.pop()];
    displayHand(dealerHand, 'dealer-hand');
    displayHand(playerHand, 'player-hand');
    showMessage('');
});
