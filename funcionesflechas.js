//1. 
// funcion tradicional
function calcularDistanciaHaciaPlanetaNaboo (x1,x2,y1,y2){
 
let distancia=  Math.sqrt(((x2-x1)**2 + (y2-y1))**2)

    return distancia

}

console.log(calcularDistanciaHaciaPlanetaNaboo(1,5,1,3))


// funcion flecha1

const calcularDistanciaHaciaPlanetaNabooFlecha = (x1,x2,y1,y2) => distancia = Math.sqrt(((x2-x1)**2 + (y2-y1))**2)

console.log (calcularDistanciaHaciaPlanetaNabooFlecha(1,5,1,3))


// funcion flecha2
const calcularDistanciaHaciaPlanetaNabooFlecha2 = (x1,x2,y1,y2) =>{
    let distancia = Math.sqrt(((x2-x1)**2 + (y2-y1))**2)
    return `Resultado: ${distancia}`
}
    console.log(calcularDistanciaHaciaPlanetaNabooFlecha2(1,5,1,3))


//2. 

// funcion tradicional

function recibirClavedeNave(clave){

    

}

// funcion flecha