// script.js
// 1. primera forma de crear variables
let saludar = "Hola como andan?"; // creamos una variable llamada sauldar y como valor le damos un saludo al usuario
//console.log(saludar);
saludar = "todo bien y vos?"; // editamos la variable saludar
//console.log(saludar);
saludar += " todo bien y vos?"; // adicionamos informacion a la variable
//console.log(saludar);

//2. segunda forma de crear variables
const saludar2 = saludar; // creamos una variable con const que no cambia al tratar 

//3. tercer forma de crear variables
var nombre = "Franco Sosa";
//console.log(nombre); 


// Tipos de variables
let fruta = "manzana"; // variable de tipo string, string es un texto
let variableNumerica = 200; //variable de tipo int, int es un numero, ENTERO!

console.log(typeof fruta);
console.log(typeof variableNumerica);

let cadena = "Hola";
console.log(typeof cadena); // "string"

let arreglo = [1, 2, 3];
console.log(arreglo);
console.log(arreglo[0]);
console.log(typeof arreglo); // "Array => es una lista de cualquier cosa"
// TODO 
let objeto = { nombre: "Ejemplo", edad: 25 }; //variable compuessta
console.log(typeof objeto); // "object"
console.log(objeto);
console.log(objeto.nombre); 
console.log(objeto.edad); 
console.log(objeto.fecha); 

let noDefinido;
console.log(typeof noDefinido); // "undefined"

let nulo = null; //null o vacio
console.log(typeof nulo); // "object" (esto es un error histórico en JavaScript)

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("cambiar-color");
    const body = document.body;

    button.addEventListener("click", function () {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});