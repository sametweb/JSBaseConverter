var submit = document.getElementById("submit");
var number = document.getElementById("number");
var base = document.getElementById("radioValue");
var result = document.getElementById("result");
var resultContainer = document.getElementById("resultContainer");

submit.addEventListener("click", convertBase);

function getValue(value) {
  document.getElementById("radioValue").value = value;
}

function convertBase() {
  if (isNaN(number.value)) {
    alert("Please enter a number!");
    return true;
  }

  var inputNumber = parseInt(number.value);
  var inputBase = parseInt(base.value);
  var remainders = [];
  var remainedValue = "";
  var division = null;

  if (inputNumber < inputBase) {
    alert("Please enter a number higher than your base selection!");
    return true;
  }

  while (inputNumber >= inputBase) {
    remainedValue = inputNumber % inputBase;
    remainders.push(remainedValue);
    division = (inputNumber - remainedValue) / inputBase;
    inputNumber = division;
  }
  if (inputNumber < inputBase) {
    remainders.push(inputNumber);
  }

  var basesInt = [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35
  ];
  var basesChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  for (var i = 0; i < remainders.length; i++) {
    if (remainders[i] > 9) {
      remainders[i] = basesChar[basesInt.indexOf(remainders[i])];
    }
  }
  console.log(remainders);
  resultContainer.style.display = "block";
  var finalNumber = remainders.reverse();
  result.value = finalNumber.join("");
}
