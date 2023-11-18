function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function calculate() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function changeSign() {
    // Obtém o parágrafo pelo ID
    const resultado = document.getElementById('resultado');
  
    // Verifica se o conteúdo do parágrafo não está vazio
    if (resultado.textContent !== '') {
      // Converte o conteúdo do parágrafo para um número e multiplica por -1 para inverter o sinal
      const novoValor = parseFloat(resultado.textContent) * -1;
  
      // Atualiza o parágrafo com o novo valor
      resultado.textContent = novoValor;
    }
  }