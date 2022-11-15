// let numero1 = 5;
// let numero2 = 8;
// const resultado = numero1 + numero2;


/*if (numero1 == 5) {
    console.log ('correcto')
}*/
/*if(numero2 == 6){
    console.log ('si')
} else {
    console.log ('no')
}*/

// let nombre = prompt ('ingresa nombre');

// if (nombre.toLowerCase() == 'alan'){
//     alert('hola Alan')
// } else if (nombre.toLowerCase() == 'facu'){
//     alert('hola Facu')
// }else{
//     alert('chau')
// }

// 

//ejemplo de calculadora solo con condicional!!
//const numero1 = parseInt(prompt('ingresa peso en kg'))
//const numero2 = parseInt(prompt('ingresa hematocrito'))
//let parametro = prompt('volumen-albumina')
//const operacion1 = (((numero1*70)*(1-(numero2/100)))*1.2)
//const operacon2 = ((((5*(((numero1*70)*(1-(numero2/100)))*1.2)/100)/100)/10)*50)
//let resultado
//if(parametro === 'volumen'){
// //resultado =  (((numero1*70)*(1-(numero2/100)))*1.2)
// alert (resultado)
// } else if (parametro === 'albumina'){
//     resultado =  (((5*(((numero1*70)*(1-(numero2/100)))*1.2)/100)/10)*50)
//     alert (resultado)
// } else{
//     alert ('error')
// }

//ejemplo ciclo calculadora!
// let peso = parseInt(prompt('ingrese peso'))
// let hemato = parseInt(prompt('ingrese hematocrito'))
// let resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
// let resultado2 = (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
// alert('cantidad de volumen a preparar '+ resultado1)
// alert('volumen de albumina a utilizar '+ resultado2)
// let volverCalcular = prompt('volver a calcular?')

// while(volverCalcular === 'si'){
//     peso = parseInt(prompt('ingrese peso'))
//     hemato = parseInt(prompt('ingrese hematocrito'))
//     resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
//     resultado2= (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
//     alert('cantidad de volumen a preparar '+ resultado1)
//     alert('volumen de albumina a utilizar '+ resultado2)
//     volverCalcular = prompt('volver a calcular?')
// // }

//ejemplo del profe de continue
// 

//ejemplo para hacer que los resultados se vayan sumando...que la variable totalcompra vaya acumulando
//explicacion en la clase 3 1.25 h
// let producto = parseInt(prompt('elegi producto: 1.tv - 2.cel - 3. tabl'))
// let totalCompra = 0
// let seguirComprando = true
// let desicion 
// while(seguirComprando===true){
//     if(producto===1){
//         totalCompra = totalCompra + 100
//     } else if(producto===2){
//         totalCompra = totalCompra + 150
//     } else if(producto===3){
//         totalCompra = totalCompra + 200
//     } else{
//         producto = parseInt(prompt('elige otra vez 1.tv - 2.cel - 3. tabl'))
//         continue
//     }
//     desicion = parseInt(prompt('queres seguir compreando? 1. si 2. no'))
//     if(desicion===1){
//         producto = parseInt(prompt('elegi otro mas 1 2 3'))
//     } else{
//         seguirComprando = false
//     }
// }

//     alert(`el totsal es  ${totalCompra}`)

//ejemplo de calculadora usando funciones
// let num1 = parseInt(prompt('ingresa un num'))
// let num2 = parseInt(prompt('ingresa otro num'))
// let oper = prompt('elige que operacion hacer : suma resta mult div')

// function suma(p1,p2){
//     let resultado = p1+p2
//     return resultado
// }
// function resta(p1,p2){
//     let resultado = p1-p2
//     return resultado
// }
// function mult(p1,p2){
//     let resultado = p1*p2
//     return resultado
// }
// function div(p1,p2){
//     let resultado = p1/p2
//     return resultado
// }

// function calculadora(p1,p2,operacion){
//     let resultado
//     if(operacion==='sum'){
//         resultado = suma(p1,p2)
//     } else if(operacion==='resta'){
//         resultado = resta(p1,p2)
//     }else if(operacion==='mult'){
//         resultado = mult(p1,p2)
//     }else if(operacion==='div'){
//         resultado = div(p1,p2)
//     }else{
//         alert('error')
//     }
//     return resultado
// }

// const resultCalculadora = calculadora(num1,num2,oper)
// alert('el resultado es '+resultCalculadora)

// ejemplo arrays splice
// const animales = ['gato', 'perro', 'serpiente', 'caballo', 'raton']
// animales.splice(1,1)
// console.log (animales)
// animales.splice(2,1) //aca pongo posicion 2 ñara caballo, ya que se elimino primero perro, entoces caballo paso de posicion 3 a 2
// console.log (animales)

let peso = parseInt(prompt('ingrese peso del paciente en Kg'))
let hemato = parseInt(prompt('ingrese hematocrito'))
//let resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
//let resultado2 = (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
function volumen (p1,p2){
   let resultado1= (((p1*70)*(1-(p2/100)))*1.2)
}
function albumina (p1,p2){
  let resultado2=(((5*(((p1*70)*(1-(p2/100)))*1.2)/100)/10)*50)
}
resultado1= volumen(peso,hemato)
resultado2=albumina(peso,hemato)
// function calculadora (){
//   volumen(peso,hemato)
//   albumina(peso,hemato) 
//}
alert('cantidad de volumen a preparar '+ resultado1)
alert('volumen de albumina a utilizar '+ resultado2)
let volverCalcular = prompt('volver a calcular?')

while(volverCalcular === 'si'){
    peso = parseInt(prompt('ingrese peso'))
    hemato = parseInt(prompt('ingrese hematocrito'))
    //resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
    //resultado2= (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
     volumen(peso,hemato)
     albumina(peso,hemato)
    alert('cantidad de volumen a preparar '+ resultado1)
    alert('volumen de albumina a utilizar '+ resultado2)
    volverCalcular = prompt('volver a calcular?')
}