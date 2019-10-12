class Calculator {
  assignValues(value) {
    this.number = parseInt(document.getElementById("number").value);
    this.base = parseInt(value);
    calculator.calculate();
  }
  calculate() {
    let remainders = [];
    let remainedValue = null;
    let division = null;

    if (!this.number) {
      alert("Please enter a decimal number!");
      document.getElementById("resultContainer").style.display = "none";
      document.getElementById(this.base).checked = false;
      return true;
      // this is useless without the convert button
      // } else if (!this.base) {
      //   alert("Please select a base to convert!");
      //   document.getElementById("resultContainer").style.display = "none";
      //   return true;
    } else if (this.number < this.base) {
      alert("Please enter a number higher than your base selection!");
      return true;
    }
    while (this.number >= this.base) {
      remainedValue = this.number % this.base;
      remainders.push(remainedValue);
      division = (this.number - remainedValue) / this.base;
      this.number = division;
    }
    if (this.number < this.base) {
      remainders.push(this.number);
    }
    // prettier-ignore
    var basesInt = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    // prettier-ignore
    var basesChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var i = 0; i < remainders.length; i++) {
      if (remainders[i] > 9) {
        remainders[i] = basesChar[basesInt.indexOf(remainders[i])];
      }
    }
    document.getElementById("resultContainer").style.display = "block";
    let finalNumber = remainders.reverse();
    document.getElementById("result").value = finalNumber.join("");
  }
}
const calculator = new Calculator();
