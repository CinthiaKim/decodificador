function criptografar(){

  const textoEntrada = document.getElementById('input_texto').value.toLowerCase();

  const regex = /[A-ZÀ-Úà-ú0-9]/;
  if (regex.test(textoEntrada)) {
      alert("Digite apenas letras minúsculas e sem acento.");

      // Limpa o Campo de input Caso tenha caractere especial
      const limparCaracteres = document.getElementById('input_texto');
      limparCaracteres.value = '';

      const limparCaracteresOut = document.getElementById('.output_texto');
      limparCaracteresOut.value = '';
    } 
   
  const resultado = document.getElementById('resultado');

  const saida = textoEntrada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    
    resultado.innerHTML = saida; 
  }

  function descriptografar(){
    const textoEntrada = document.getElementById('input_texto').value.toLowerCase();
    const resultado = document.getElementById('resultado');
  
    const saida = textoEntrada
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
  
    resultado.innerHTML = saida;
    }

    function copiar() {
      const textoSaida = document.getElementById('resultado').innerHTML;
      navigator.clipboard.writeText(textoSaida);
    }