let nombre= prompt('ingresa tu nombre y apellido')
let email= prompt ('ingresa tu email')
let profesion= prompt('ingresa tu profesion')
alert('Bienvenido a la calculadora '+nombre)
alert('comencemos a calcular!')

let peso = parseInt(prompt('ingrese peso del paciente en Kg'))
let hemato = parseInt(prompt('ingrese hematocrito'))
let resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
let resultado2 = (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
alert('cantidad de volumen a preparar '+ resultado1)
alert('volumen de albumina a utilizar '+ resultado2)
let volverCalcular = prompt('volver a calcular?')

while(volverCalcular === 'si'){
    peso = parseInt(prompt('ingrese peso'))
    hemato = parseInt(prompt('ingrese hematocrito'))
    resultado1 = (((peso*70)*(1-(hemato/100)))*1.2)
    resultado2= (((5*(((peso*70)*(1-(hemato/100)))*1.2)/100)/10)*50)
    alert('cantidad de volumen a preparar '+ resultado1)
    alert('volumen de albumina a utilizar '+ resultado2)
    volverCalcular = prompt('volver a calcular?')
}

alert('gracias por utilizar nuestra herramienta')

//opcion con funciones
// let peso = parseInt(prompt('ingrese peso del paciente en Kg'))
// let hemato = parseInt(prompt('ingrese hematocrito'))
// function volumen (p1,p2){
//     let resultado1= (((p1*70)*(1-(p2/100)))*1.2)
//  }
//  function albumina (p1,p2){
//    let resultado2=(((5*(((p1*70)*(1-(p2/100)))*1.2)/100)/10)*50)
//  }
//  resultado1= volumen(peso,hemato)
//  resultado2=albumina(peso,hemato)
//  alert('cantidad de volumen a preparar '+ resultado1)
// alert('volumen de albumina a utilizar '+ resultado2)
// let volverCalcular = prompt('volver a calcular?')

// while(volverCalcular === 'si'){
//     peso = parseInt(prompt('ingrese peso'))
//     hemato = parseInt(prompt('ingrese hematocrito'))
//     volumen(peso,hemato)
//      albumina(peso,hemato)
//     alert('cantidad de volumen a preparar '+ resultado1)
//     alert('volumen de albumina a utilizar '+ resultado2)
//     volverCalcular = prompt('volver a calcular?')
// }

// alert('gracias por utilizar nuestra herramienta')
