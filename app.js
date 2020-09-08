const h1 = document.querySelector('#header');
const colorDisplay = document.querySelector('#colorDisplay');
const colorGuess = document.querySelector('#colorGuessMessage');
const resetButton = document.querySelector('#resetButton');
const squares = document.querySelectorAll('.square');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
let numOfSquares = 6;
let colors = randomColorArrayGenerator(numOfSquares);
let pickedColor = randomColorPicker();

colorDisplay.innerHTML = pickedColor;

resetButton.addEventListener('click', resetButtonClick);
easyBtn.addEventListener('click', easyButtonClick);
hardBtn.addEventListener('click', hardButtonClick);

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', squareClick);
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
	resetButton.innerHTML = 'New Colors';
	h1.style.backgroundColor = '#232323';

	colors = randomColorArrayGenerator(numOfSquares);
	pickedColor = randomColorPicker();
	colorDisplay.innerHTML = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
}

// refactor
function easyButtonClick() {
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numOfSquares = 3;

	colors = randomColorArrayGenerator(numOfSquares);
	pickedColor = randomColorPicker();
	colorDisplay.innerHTML = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}

// refactor
function hardButtonClick() {
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numOfSquares = 6;

	colors = randomColorArrayGenerator(numOfSquares);
	pickedColor = randomColorPicker();
	colorDisplay.innerHTML = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
}
