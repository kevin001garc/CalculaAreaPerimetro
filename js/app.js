(()=>{
let resultado = '';
function result(e){
    let mostrarCalculo = true;
    let a = e;
    if(mostrarCalculo){
        swal.fire({
            title: "Calculo exitoso",
            text: a,
            icon: "success"
        })
    }
}

function limpiar(){
    let borrar = document.querySelectorAll('input');
    for( let input of borrar){
        input.value = null;
    }
}

let n = document.querySelector('[data-inputCuadrado]');
let cuadradoPer = document.querySelector('[data-Cuadrado-Per]');
let cuadradoArea = document.querySelector('[data-Cuadrado-Area]');
const perimetroCuadrado = (lado)=> lado * 4;
const areaCuadrado = (lado)=> lado * lado;

function perCuadrado(){
    let input = Number(n.value);
    resultado = `El perimetro del cuadrado es ${perimetroCuadrado(input)}`;
    result(resultado);
    limpiar();
}

function AreaCuadrado(){
    let input = Number(n.value);
    resultado = `El area del cuadrado es ${areaCuadrado(input)}`;
    result(resultado);
    limpiar();
}

cuadradoPer.addEventListener("click", perCuadrado);
cuadradoArea.addEventListener("click", AreaCuadrado);

let circulo = document.querySelector('[data-input-circulo]');
let circuloPerimetro = document.querySelector('[data-circulo-perimetro]');
let circuloArea = document.querySelector('[data-circulo-Area]');
let circuloDiametro = document.querySelector('[data-circulo-diametro]');
const perimetroCiculo = (radio)=> 2 * Math.PI * radio;
const areaCirculo = (radio)=> Math.PI * (radio * radio);
const diametroCirculo = (radio)=> radio * 2;

function PerimetroCirculo(){
    let inputCirculo = Number(circulo.value);
    resultado = `El perimetro del circulo es: ${perimetroCiculo(inputCirculo)}`;
    result(resultado);
    limpiar();
}

function AreaCirculo(){
    let inputCirculo = Number(circulo.value);
    resultado = `El area del circulo es: ${areaCirculo(inputCirculo)}`;
    result(resultado);
    limpiar();
}

function DiametroCirculo(){
    let inputCirculo = Number(circulo.value);
    resultado = `El area del circulo es: ${diametroCirculo(inputCirculo)}`;
    result(resultado);
    limpiar();
}

circuloPerimetro.addEventListener("click", PerimetroCirculo);
circuloArea.addEventListener("click", AreaCirculo);
circuloDiametro.addEventListener("click", DiametroCirculo);


let trianguloPerimetro = document.querySelector('[data-triangulo-perimetro]');
let trianguloArea = document.querySelector('[data-triangulo-area]');
const perimetroTriangulo = (t1, t2, t3)=> t1 + t2 +t3;
const areatriangulo = (base, altura) => (base * altura) / 2;

function PerimetroTriangulo(){
    let lado1 = document.querySelector('[data-input-triangulo1]');
    let lado2 = document.querySelector('[data-input-triangulo2]');
    let lado3 = document.querySelector('[data-input-triangulo3]');
    let valor1 = Number(lado1.value);
    let valor2 = Number(lado2.value);
    let valor3 = Number(lado3.value);
    resultado = `El perimetro del circulo es ${perimetroTriangulo(valor1, valor2, valor3)}`;
    result(resultado);
    limpiar();
}

function AreaTriangulo(){
    let base = document.querySelector('[data-input-tringulo-base]') ;
    let altura = document.querySelector('[data-input-triangulo-altura]');
    let Base = Number(base.value);
    let Altura = Number(altura.value);
    resultado = `El area del triangulo es ${areatriangulo(Base, Altura)}`;
    result(resultado);
    limpiar();
}
trianguloPerimetro.addEventListener("click", PerimetroTriangulo);
trianguloArea.addEventListener("click", AreaTriangulo);
}) ();
