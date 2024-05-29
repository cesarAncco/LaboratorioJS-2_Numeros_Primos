document.getElementById("verificar").addEventListener("click", function () {
  let numero = document.getElementById("numero").value;
  es_par_impar(numero);
});

function es_par_impar(numero_parametro) {
  let pContenido = document.getElementById("resultado");
  let numero = parseInt(numero_parametro);
  if (numero) {
    if (es_primo(numero)) {
      pContenido.textContent = `Es primo`;
      console.log('es primo')
    } else {
      pContenido.textContent = `No es primo`;
      console.log('no es primo')
    }
  } else {
    pContenido.textContent = "Ingrese un numero valido.";
  }

  
}

function es_primo (numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false
    }
  }
  return true
}
