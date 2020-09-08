const h1 = document.querySelector('h1');
const colorDisplay = document.querySelector('#colorDisplay');
const colorGuess = document.querySelector('#colorGuessMessage');
const squares = document.querySelectorAll('.square');
const colors = randomColorArrayGenerator(6);
const pickedColor = randomColorPicker();

colorDisplay.innerHTML = pickedColor;

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', squareClick);
}

function squareClick() {
	let clickedColor = this.style.backgroundColor;

	if (clickedColor === pickedColor) {
		colorGuess.innerHTML = 'Correct!';
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
