document.getElementById("verificar").addEventListener("click", function () {
  let numero = document.getElementById("numero").value;
  primo_visualizar(numero);
});

function primo_visualizar(numero_parametro) {
  let pContenido = document.getElementById("resultado");
  let numero = parseInt(numero_parametro);
  if (!isNaN(numero) && 0 < numero) {
    if (es_primo(numero)) {
      pContenido.textContent = `Es primo`;
      console.log('es primo')
    } else {
      pContenido.textContent = `No es primo`;
      console.log('no es primo')
    }
  } else {
    pContenido.textContent = "Ingrese un numero valido y que sea diferente de cero.";
  }

  
}

function es_primo (numero) {
  if (numero === 1) {
    return false
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false
      }
    }
    return true
  }
}
