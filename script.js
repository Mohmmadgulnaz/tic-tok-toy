let currentPlayer = 'X';
let cells = Array.from(document.querySelectorAll('.cell'));
let messageDisplay = document.getElementById('message');

function cellClicked(index) {
    if (cells[index].innerText === '') {
        cells[index].innerText = currentPlayer;
        if (checkWinner()) {
            messageDisplay.innerText = `Player ${currentPlayer} wins!`;
            cells.forEach(cell => cell.onclick = null);
        } else if (checkDraw()) {
            messageDisplay.innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageDisplay.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winCombos.some(combo => {
        return cells[combo[0]].innerText !== '' &&
            cells[combo[0]].innerText === cells[combo[1]].innerText &&
            cells[combo[1]].innerText === cells[combo[2]].innerText;
    });
}

function checkDraw() {
    return cells.every(cell => cell.innerText !== '');
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.onclick = () => cellClicked(cells.indexOf(cell));
    });
    currentPlayer = 'X';
    messageDisplay.innerText = `Player ${currentPlayer}'s turn`;
}
