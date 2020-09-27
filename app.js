let input = document.querySelector('.main-input');
let button = document.querySelector('.main-btn');
let resDisplay = document.querySelector('.results-display');
button.addEventListener('click', () => {
  if (input.value != '') {
    displayOutput(input.value);
  }
});
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && input.value != '') {
    displayOutput(input.value);
  }
});

const displayOutput = (res) => {
  //get result from main func
  let output = uniqueChar(res);

  //clear previous markup
  resDisplay.innerHTML = '';

  //create the markup
  const markup = `
    <h3>The index of the first unique character, "${output[1]}", is ${output[0]}</h3>
  `;

  //display it on the screen
  resDisplay.insertAdjacentHTML('afterbegin', markup);
};

const uniqueChar = (str) => {
  str = str.toLowerCase();
  let strArray = {};
  for (let i = 0; i < str.length; i++) {
    //if the char isn't in the object, add it & set the char count to 1
    if (!strArray[str[i]]) {
      strArray[str[i]] = 1;
      //if it is, increment the count
    } else {
      strArray[str[i]] = strArray[str[i]] + 1;
    }
  }

  console.log(strArray);

  for (let i = 0; i < str.length; i++) {
    //compare the char to the number in object, return first one that is 1
    if (strArray[str[i]] == 1) {
      return [i, str[i]];
    }
  }

  return -1;
};
