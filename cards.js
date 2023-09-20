// 1. Obtener una carta de una pila
export function getItem(cartas, posicion) {
    return cartas[posicion]; // Devuelve la carta en la posición especificada en la pila.
}

// 2. Intercambiar una carta en la pila
export function setItem(cartas, posicion, cartaReemplazo) {
    cartas[posicion] = cartaReemplazo; // Reemplaza la carta en la posición especificada por una carta de reemplazo.
    return cartas; // Devuelve la pila modificada.
}

// 3. Insertar una carta en la parte superior de la pila
export function insertItemAtTop(cartas, nuevaCarta) {
    cartas.push(nuevaCarta); // Agrega una nueva carta en la parte superior de la pila.
    return cartas; // Devuelve la pila modificada.
}

// 4. Eliminar una carta de la pila
export function removeItem(cartas, posicion) {
    cartas.splice(posicion, 1); // Elimina una carta de la pila en la posición especificada.
    return cartas; // Devuelve la pila modificada.
}

// 5. Eliminar la carta superior de la pila
export function removeItemFromTop(cartas) {
    cartas.pop(); // Elimina la carta superior de la pila.
    return cartas; // Devuelve la pila modificada.
}

// 6. Insertar una carta en la parte inferior de la pila
export function insertItemAtBottom(cartas, nuevaCarta) {
    cartas.unshift(nuevaCarta); // Agrega una nueva carta en la parte inferior de la pila.
    return cartas; // Devuelve la pila modificada.
}

// 7. Eliminar una carta de la parte inferior de la pila
export function removeItemAtBottom(cartas) {
    cartas.shift(); // Elimina una carta de la parte inferior de la pila.
    return cartas; // Devuelve la pila modificada.
}

// 8. Comprobar el tamaño de la pila
export function checkSizeOfStack(cartas, tamañoPila) {
    const tamaño = cartas.length; // Obtiene el tamaño actual de la pila.
    return tamaño === tamañoPila; // Compara el tamaño con el tamaño de pila especificado y devuelve true si son iguales, false en caso contrario.
}