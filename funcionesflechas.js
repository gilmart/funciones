/*
//1. 
// funcion tradicional
function calcularDistancia (x1,x2,y1,y2){
  
    return (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)))

}
//console.log(calcularDistancia(1,5,1,3))
let distancia = calcularDistancia(1,5,1,3)
console.log(`la distancia calculada fue:  ${distancia}`)


// funcion flecha1

const calcularDistanciaFlecha = (x1,x2,y1,y2) =>  Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

let distancia1 = calcularDistanciaFlecha(1,5,1,3)

console.log(`la distancia calculada fue:  ${distancia1}`)



//2. 

// funcion tradicional

//declarando a la funcion
function obtenerNombre(codigo){
    let nombre = codigo.split(':')[1] + codigo.split(':')[0]

    return nombre
}

// llamando a la funcion

let resultado = obtenerNombre('11012345 : Gilma')
console.log(resultado)

// funcion flecha

obtenerNombre1 = codigo1 => nombre = codigo1.split(':')[1] + codigo1.split(':')[0]

let resultado1 = obtenerNombre1('11012345 : Gilma') 
console.log(resultado1)

//3. 

// funcion tradicional
//declarando a la funcion
function calcularTemperatura(tempMax , tempMin){
    return (tempMax+tempMin)/2
}

let resultadoTemp = calcularTemperatura(20,13)
console.log(`la temperatura media es ${resultadoTemp}`)

//funcion flecha
calcularTemperatura1 = (tempMax,tempMin) => (tempMax+tempMin)/2
// llamando a la funcion
let resultadoTemp1 = calcularTemperatura1(20,13)
console.log(`la temperatura media es ${resultadoTemp1}`)

//4. 

// funcion tradicional
//declarando a la funcion
function contabilizarSables (sable){

    return sable.filter(x => x <0).length

}
console.log(contabilizarSables([2,4,-8,5,-6]))

// funcion flecha
contabilizarSables1 = sable => sable.filter(x=> x <0).length
let sablesNegativos = contabilizarSables([2,4,-8,5,-6])
console.log(sablesNegativos)

//5.
// funcion tradicional

function calcularSalario(licencias){
    let salario = 3500000
    let comision = 1500000
    let impuestos = 0.95    
    
    return ((salario+(licencias * comision))*impuestos)
}

console.log(calcularSalario(1))

// funcion flecha

calcularSalario1 = licencias => { salario = 3500000 , comision = 1500000, impuestos = 0.95   
    
    return ( (salario+(licencias * comision))*impuestos)
}
console.log(calcularSalario1(1))


//6.
// funcion tradicional
function Padawan(nombre,planeta,edad,estatura){
    this.nombre = nombre
    this.planeta = planeta
    this.edad = edad
    this.estatura = estatura
    this.actividad =  function(){
        if (edad > 15){
            console.log(resultado = `La actividad asignada es Manejo del sable de luz`)
        }
        else{
            console.log(resultado = `La actividad asignada es: Manejo de la fuerza`)
        }
        return resultado
    }

    this.datosCompletos =function(){
        return `\n` + this.nombre + ' '+ `\n` + this.planeta + ' ' + `\n` + this.edad + ' ' +`\n`+ this.estatura + ' ' +`\n` + resultado
    }
}


let padawan1 = new Padawan('juan','martes',16,'1.60')

console.log(padawan1.datosCompletos())
console.log(padawan1.actividad())

let padawan2 = new Padawan('jose','saturno',10,'1.40')
console.log(padawan2.datosCompletos())
console.log(padawan2.actividad())


*/
//7.
// funcion tradicional

function mensajeExitoso(aleatorio){

   // let exitoso = ("Plano conseguido, listos para despegar")
    console.log(`Plano conseguido, ¡feliz viaje! ${aleatorio}`)
}

function mensajeError(aleatorio){

    // let exitoso = ("Plano conseguido, listos para despegar")
     console.log(`Plano falso conseguido, intente nuevamente con otra secuencia. ${aleatorio}`)
 }



function planos(min,max,mensajeCallBack,mensajeCallBackError){

    let aleatorio = Math.floor((Math.random() * (max-min +1))+ min)
   
   if(aleatorio <= 10){
    mensajeCallBack(`Serie de plano: #${aleatorio} , `)
    return (aleatorio)
   }

   else{

    mensajeCallBackError(`Serie de plano: #${aleatorio} , `)
    return (aleatorio)

   }

}

planos(1,10,mensajeExitoso,mensajeError)
