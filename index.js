// ALGORITMOS SECUENCIALES
// EJERCICIO 1
let escoja = prompt("Elija entre triangulo, circulo o rectangulo para calcular el area").toLowerCase().trim()
if (escoja === "triangulo") {
    let b = parseInt(prompt("Elija ancho"))
    let h = parseInt(prompt("Elija altura"))
    let a = (b*h)/2
    console.log("El area del trangulo es de ", a);
}else if (escoja === "rectangulo") {
    let b = parseInt(prompt("Elija ancho"))
    let h = parseInt(prompt("Elija altura"))
    let a = 2*(b+h)
    console.log("El area del rectangulo es de ", a);
}else if (escoja === "circulo") {
    let r = parseInt(prompt("Escoja el radio del circulo"))
    let a = 2*Math.PI*r
    console.log("El area del circulo es de ", a);
}else{
    alert("Escoja una opcion valida")
}

// EJERCICIO 2

let num = parseInt(prompt("Ingrese un numero para promediar"))
let num1 = parseInt(prompt("Ingrese un numero para promediar"))
let num2 = parseInt(prompt("Ingrese un numero para promediar"))
let num3 = parseInt(prompt("Ingrese un numero para prommediar"))
let prom5 = (num + num1 + num2 + num3) / 4
console.log("El promedio de los numeros ingresados es de: ", prom5);

// EJERCICIO 3
let num4 = parseInt(prompt("Escoja un numero para calcular si es par o impar"))
if (num4 % 2 ) {
    console.log("El numero es impar");
}else{
    console.log("El numero es par");
}

// EJERCICIO 4
let num5 = parseInt(prompt("Escoja un numero para hacer factorial"))
let resultado = num5
if (num5 === 0 || num5 ===1) {
    console.log(1);
}
while (num5 > 1) {
    num5 --
    resultado = resultado * num5
}
console.log(resultado);

// EJERCICIO 5
let temp = parseInt(prompt("Ingrese temperatura en celsius para convertir en fahrenheit"))
let fahrenheit = (temp * 9/5) + 32
    console.log("La temperatura en fahrenheit es de: ", fahrenheit,"°F");

// FUNCIONES MATEMATICAS
// EJERCICIO 1
let raiz = parseInt(prompt("Ingrese numero para sacar la raiz cuadrada"))
let cuadrada = Math.sqrt(raiz)
console.log("La raiz cuadrada del numero ingresado es de: ", cuadrada );

// EJERCICIO 2
let poten = parseInt(prompt("Ingrese numero para sacar la potencia"))
let exponente = parseInt(prompt("Ingrese el exponente que desea"))
let potencia = Math.pow(poten, exponente)
console.log("La raiz cuadrada del numero ingresado es de: ", potencia);

// EJERCICIO 3 && EJERCICIO 4 && EJERCICIO 5
let seno = parseInt(prompt("Ingrese medida del angulo para calcular el seno, coseno y tangente"))
let seno1 = Math.sin(seno)
let coseno = Math.cos(seno)
let tangente = Math.tan(seno)
console.log("El seno del angulo es: ", seno1);
console.log("El coseno del angulo es: ", coseno);
console.log("La tangente del angulo es: ", tangente);

// CICLO PARA
// EJERCICIO 1
let array = []
for (let i = 1; i <= 100; i++) {
    array.push(i)
}
console.log(array);

// EJERCICIO 2
let array1 = []
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        array1.push(i) 
    }      
}
let suma = array1.reduce((e,i)=> e+i);
console.log(suma);

// EJERCICIO 3
let array2 = []

for (let i = 1; i < 11; i++) {
   array2.push(i*5)
}
console.log(array2);

// EJERCICIO 4
let array3 = []
for (let i = 0; i <= 50; i++) {
    if (i % 2) {
        array3.push(i) 
    }      
}
console.log(array3);   

// EJERCICIO 5
let array5 = [4,3.5,5,1,0.5,4.5]
let prom = 0
for (let index = 0; index < array5.length; index++) {
        prom += array5[index]
}
let promediar = prom / array5.length
console.log("El promedio es:", promediar);

// CICLO MIENTRAS
// EJERCICIO 1
let array6 = [1, 5, 8 , 9, 11, 4, 5 ,7, 8, -3, 5]
let numerosPositivos = 0
while (numerosPositivos < array6.length) {
    if (array6[numerosPositivos] > 0) {
        console.log(array6[numerosPositivos]);
    }
    numerosPositivos++
}

// EJERCICIO 2
let sumaCero = 0;
let numeroCero = parseInt(prompt("Introduce un número (0 para terminar):"));

while (numeroCero !== 0) {
  if (numeroCero > 0) {
    sumaCero += numeroCero; 
  }
  numeroCero = parseInt(prompt("Introduce otro número (0 para terminar):"));
}
console.log("La suma de los números positivos es:", sumaCero);

// EJERCICIO 3
let numFac = parseInt(prompt("Escoja un numero para hacer factorial"))
let resultadoFac = numFac
if (numFac === 0 || numFac ===1) {
    console.log(1);
}
while (numFac > 1) {
    numFac --
    resultadoFac = resultadoFac * numFac
}
console.log(resultadoFac);

// EJERCICIO 4
let num100 = []
let num99 = 0
while (num99 <= 100) {
    num100.push(num99)
    num99++  
}
console.log(num100);

// EJERCICIO 5
let numSec = 7
let numAdiv = parseInt(prompt("Adivina el número secreto"))
while(numAdiv !== numSec) {
    alert("sigue intentando")
    numAdiv = parseInt(prompt("Adivina el número secreto"))
    while(numAdiv === numSec) {
        alert("FELICIDADES HAS GANADO!!!")
        numAdiv = parseInt(prompt("Adivina el número secreto"))
    }
}

// CICLO REPITA
// EJERCICIO 1
let imp = 0
do {
    imp++
    console.log(imp);
    
} while (imp < 10);

// EJERCICIO 2
let sumaPares3 = 0;
let i2 = 1;

do {
    if (i2 % 2 === 0) {  
        sumaPares3 += i2;      
    }
    i2++;
} while (i2 <= 20);

console.log(sumaPares3);

// EJERCICIO 3
let mult5 = 5
let i3 = 0
do {
    i3++
    console.log(mult5 * i3);
} while (i3 < 10);

// EJERCICIO 4
let impar2 = 0
do {
    if (impar2 % 2 === 1) {
        console.log(impar2);    
    }  
    impar2++ 
} while (impar2 < 50);

// EJERCICIO 4

let calificaciones = [];
let suma5 = 0;
let contador = 0;
let continuar = true;

do {
    let calificacion = parseFloat(prompt("Ingresa una calificación (o escribe 'salir' para terminar):"));
    if (isNaN(calificacion)) {
        continuar = false; 
    } else {
        calificaciones.push(calificacion);
        suma5 += calificacion;
        contador++;
    }
} while (continuar);
if (contador > 0) {
    let promedio = suma5 / contador;
    console.log("El promedio de las calificaciones es: " + promedio);
} else {
    console.log("No se ingresaron calificaciones.");
}
