let display = document.getElementById("display");
    let currentInput = "";

    function appendNumber(num) {
      currentInput += num;
      display.value = currentInput;
    }

    function appendOperator(operator) {
      currentInput += operator;
      display.value = currentInput;
    }

    function calculate() {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch (error) {
        display.value = "Erro";
      }
    }

    function clearDisplay() {
      currentInput = "";
      display.value = "";
    }