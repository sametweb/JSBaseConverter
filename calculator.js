class Calculator {
  constructor(attrs) {
    this.number = attrs.number;
    this.base = attrs.base;
    this.result = attrs.result;
    this.submit = attrs.submit;
    this.resultContainer = attrs.resultContainer;
  }
  assignRadioToHidden() {}
  calculate() {}
}

const calculator = new Calculator({
  number: 0,
  base: 0,
  submit: "#submit",
  result: "#result",
  resultContainer: "#resultContainer"
});
