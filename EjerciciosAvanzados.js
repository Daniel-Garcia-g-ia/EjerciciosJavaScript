function ObtenerLetra(palabra, posicion) {
  let i = 0;
  let letra = "";
  let NuevaPalabra = "";
  let resultado = [];
  for (let letras of palabra) {
    i++;
    if (i !== posicion) {
      NuevaPalabra = NuevaPalabra + letras;
    } else {
      letra = letra + letras;
    }
  }
  return (resultado = [letra, NuevaPalabra]);
}
let palabra = "palabras";
let posicion = 5;
let imprimir = ObtenerLetra(palabra, posicion);

console.log(`La palabra ingresada es : "${palabra} "\n
La Letra Obtenida en la posición ${posicion}
es ${imprimir[0]} \n 
La nueva Palabra sin la letra es : "${imprimir[1]} "`);
