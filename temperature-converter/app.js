const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function main(){
celciusInput.addEventListener('input', celciusConverter);
fahrenheitInput.addEventListener('input', fahrenheitConverter);
kelvinInput.addEventListener('input', kelvinConverter);
}

main();

function roundNum(num) {
	return Math.round(num*100)/100;
}

function celciusConverter() {
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = (cTemp * (9 / 5)) + 32;
	const kTemp = (cTemp + 273.15);
	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
};

function fahrenheitConverter() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5/9);
	const kTemp = (fTemp + 459.67) * (5/9);
	celciusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}

function kelvinConverter() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (kTemp - 273) * (9/5) + 32;
	celciusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
}
