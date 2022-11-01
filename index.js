// const numero1 = parseInt(prompt('Ingresa un numero')) 
// const numero2 = parseInt(prompt('ingresa otro numero'))
// const operacion = prompt('que operacion queres hacer? sum-rest-mult-div')
// let resultado
// if (operacion == 'sum') {
//     resultado = numero1+numero2
// } else if(operacion == 'rest') {
//     resultado = numero1-numero2
// } 
// else if (operacion == 'mult'){
//     resultado = numero1*numero2
// } else if (operacion == 'div') {
//     resultado = numero1/numero2
// } else {
//     resultado = 'error'
// }
// alert ('el resultado es '+resultado)
function solucionDialisis (){
let peso = parseInt(prompt('Ingresar peso de paciente en Kg'))
let hematocrito = parseInt(prompt('Ingresar valor de hematocrito en %'))
let resultado1 = parseInt(peso*70*(1-(hematocrito/100)*1,2))
let resultado2= parseInt(5*resultado1/100/10*50)
alert ('volumen total a infundir de solucion de albúmina en solucion fisiológica al 5% '+ resultado1 + 'el volumen de albumina a utilizar es '+ resultado2)
}
let volverCalcular= parseInt(prompt ('volver a calcular? 1.si - 2.no'))

while(volverCalcular === 2){
    solucionDialisis ()
} 
