    let tela = document.getElementById("tela");
    let currentInput = "";

    function seleciona_numero(num) {
      currentInput += num;
      tela.value = currentInput;
    }

    function seleciona_operador(operator) {
      currentInput += operator;
      tela.value = currentInput;
    }

    function calcular() {
      try {
        tela.value = eval(currentInput);
        currentInput = tela.value;
      } catch (error) 
      {
        tela.value = "Erro";
      }

      if (tela.value < 0){
        document.getElementById('tela').style.backgroundColor="#FF0000";
      }
      
      if (tela.value > 0){
        document.getElementById('tela').style.backgroundColor="#00FF00";
      }

      if (tela.value == 0){
        document.getElementById('tela').style.backgroundColor="#F5DEB3";
      }
    }

    function limpar() {
      currentInput = "";
      tela.value = "";
      document.getElementById('tela').style.backgroundColor="";
    }

    