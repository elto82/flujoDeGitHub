function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (typeof numero !== "number") {
    throw new Error("El argumento debe ser un número");
  }

  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}
