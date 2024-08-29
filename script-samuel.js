let count = 0;

const cardValues = {
    '2': 1, '3': 1, '4': 1,
    '5': 1, '6': 1, '7': 0,
    '8': 0, '9': 0,
    '10': -1, 'J': -1, 'Q': -1, 'K': -1, 'A': -1
};

function addCard(card) {
    count += cardValues[card];
    document.getElementById('countDisplay').innerText = count;
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerText = count;
}
