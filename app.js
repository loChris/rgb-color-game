const h1 = document.querySelector('#header');
const colorDisplay = document.querySelector('#colorDisplay');
const colorGuess = document.querySelector('#colorGuessMessage');
const resetButton = document.querySelector('#resetButton');
const squares = document.querySelectorAll('.square');
const modeButtons = document.querySelectorAll('.mode');
let numOfSquares = 6;
let colors = [];
let pickedColor;

start();

function start() {
	resetButton.addEventListener('click', resetButtonClick);

	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener('click', squareClick);
	}

	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', modeSelector);
	}

	reset();

	colorDisplay.innerHTML = pickedColor;
}

function modeSelector() {
	modeButtons[0].classList.remove('selected');
	modeButtons[1].classList.remove('selected');
	this.classList.add('selected');
	this.textContent === 'Easy' ? (numOfSquares = 3) : (numOfSquares = 6);
	reset();
}

function squareClick() {
	let clickedColor = this.style.backgroundColor;

	if (clickedColor === pickedColor) {
		colorGuess.innerHTML = 'Correct!';
		resetButton.innerHTML = 'Play Again?';
		changeSquareColorsOnCorrect(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {
		this.style.backgroundColor = '#232323';
		colorGuess.innerHTML = 'Wrong. Try again!';
	}
}

function changeSquareColorsOnCorrect(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomColorArrayGenerator(num) {
	const arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColorGenerator());
	}

	return arr;
}

// refactor
function randomColorGenerator() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${b}, ${g})`;
}

function randomColorPicker() {
	const randomNumber = Math.floor(Math.random() * colors.length);

	return colors[randomNumber];
}

// refactor
function resetButtonClick() {
	reset();
}

function reset() {
	resetButton.innerHTML = 'New Colors';
	colorGuess.innerHTML = 'Select the correct color:';
	h1.style.backgroundColor = '#232323';

	colors = randomColorArrayGenerator(numOfSquares);
	pickedColor = randomColorPicker();
	colorDisplay.innerHTML = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}
