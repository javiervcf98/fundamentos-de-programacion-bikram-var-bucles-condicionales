//EJERCICIO-1//
let variableSinValor;
console.log (variableSinValor)

//EJERCICIO-2//
let booleano1 = true;
let booleano2 = false;
console.log (typeof booleano1);
console.log (typeof "true");
boolean 
string

//EJERCICIO-3/4//
const PI = 3.14;
const TAU = 2 * PI;
console.log(TAU); // 6.28

// EJERCICIO-5//
let booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd); // false (true && false)

//EJERCICIO-6//
let booleanoNot = !booleano1;
console.log(booleanoNot); // false
VM649:1 false

// EJERCICIO 7 //
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
// 1. (booleano1 || booleano2)        → true || false   → true
// 2. (!booleano1 && !booleano2)      → false && true   → false
// 3. (booleano1 || paso2)            → true || false   → true
// 4. paso1 && paso3                  → true && true    → true

console.log(booleanoMix0); // true
VM710:8 true

//EJERCICIO-8//
let incrementarDesp= 2;
let resultadoDesp = incrementarDesp++;
console.log (resultadoDesp);
VM1179:4 2
console.log (incrementarDesp++)
VM1241:1 3

//EJERCICIO-9//
let incrementarAntes= 2;
let resultadoAntes = ++incrementarAntes;
console.log (resultadoAntes);
VM1241:1 3

//EJERCICIO-10//
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta10_2++;
}
console.log (contarHasta10_2);
10

//EJERCICIO-11//
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

console.log(postI); // 55
console.log(postJ); // 11

//EJERCICIO-12//
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

console.log(sumaPares); // 20

//EJERCICIO-13//
let variableValorNumerico = 42;
console.log(variableValorNumerico); // 42

//EJERCICIO-14//
const MiNombre = "Javier";
console.log (`Hola, me llamo ${MiNombre}`);
Hola, me llamo Javier

//EJERCICIO-15//
const MiNumeroFav = 7;
console.log(MiNumeroFav + 1); // 8

//EJERCICIO-16//
let booleanoOr = booleano1 || booleano2;
console.log(booleanoOr); 
// true

//EJERCICIO-17//
let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);
console.log(booleanoMix1); 
// true

//EJERCICIO-18//
let seisNoEsNueve = 6 !== 9;
console.log(seisNoEsNueve); 
// true

//EJERCICIO-19//
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);
// 1. variableValorNumerico > 0            → 42 > 0        → true
// 2. -(MiNumeroFav * TAU)                 → -(7 * 6.28)   → -43.96
// 3. variableValorNumerico < -43.96       → 42 < -43.96   → false
// 4. paso1 || paso3                       → true || false → true

console.log(booleanoMix2); // true

//EJERCICIO-20//
let valorSuma = MiNumeroFav + variableValorNumerico;
console.log(valorSuma); // 49

//EJERCICIO-21//
let valorResta = MiNumeroFav - variableValorNumerico;
console.log(valorResta); // -35

//EJERCICIO-22//
let valorMultiplicación = MiNumeroFav * variableValorNumerico;
console.log(valorMultiplicación); // 294

//EJERCICIO-23//
let valorDivisión = MiNumeroFav / 3;
console.log(valorDivisión); // 2.3333333333333335

//EJERCICIO-24//
let contarHasta10 = 0;

while (contarHasta10 !== 10) {
  contarHasta10++;
}

console.log(contarHasta10); // 10

//EJERCICIO-25//
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}

console.log(preI); // 66
console.log(preJ); // 11

//EJERCICIO-26//
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}

console.log(sumaImpares); // 25