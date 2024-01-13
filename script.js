const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const  romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

const convertToRoman = (input) => {
  let index = 0;
  let result ="";

  while (input > 0) {
    if (arabicValues[index] <= input) {
      result += String(romanSymbols[index]);
      input -= arabicValues[index];
    } else {
      index += 1;
    }
  }
  return result;
};

const checkUserInput = (e) => {
  e.preventDefault;
  
  const inputInt = parseInt(numberInput.value);
  const setAlertClass = () => output.classList.add('alert');

  if (!numberInput.value || isNaN(inputInt)) {
    output.textContent = "Please enter a valid number.";
    setAlertClass();
    return;
  } else if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1.";
    setAlertClass();
    return;
  } else if (inputInt > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999.";
    setAlertClass();
    return;
  } else {
    output.textContent = convertToRoman(inputInt);
    output.classList.remove('alert');
  }
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});


