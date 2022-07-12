let datos, moneda, valorMoneda
let repetir = "no"


class monedas {
    constructor(id, tipo, valor) {
        this.id = id
        this.tipo = tipo
        this.valor = valor
    }
}

//moneda 3 es un ejemplo para utilizar un metodo ya que no veia un metodo util para usar en ningun lado pero dejo el ejemplo de que se usarlos

const moneda1 = new monedas(1, "dolar", 238)
const moneda2 = new monedas(2, "euro", 231)
//------------------------
const moneda3 = new monedas(3, "soles", 32)
//------------------------

//en lineas 51 y 54 utilizo el array de objetos

const monedasArray = [moneda1, moneda2, moneda3]

monedasArray.pop()

// //creamos la funcion con la operacion

const calculo = (datos, valorMoneda) => datos / valorMoneda;

do {
    alert("Bienvenido a mi convertidor de pesos argentinos a euro/dolar")

    //creamos el ingreso de datos y los posibles resultados erroneos que nos puede ingresar

    datos = parseFloat(prompt("Ingrese el monto en pesos a convertir"));
    if (isNaN(datos)) {
        alert("Numeros por favor :)")
    }


    moneda = (prompt(`A que moneda lo quiere convertir? "euro" o "dolar"`)).toLowerCase();
    if ((moneda != "dolar") && (moneda != "euro")) {
        alert(`Tiene que escribir "euro" o "dolar" :)`)
    }

    //le damos los valores a la moneda dependiendo que elija "euro" o "dolar"

    switch (moneda) {
        case "dolar":
            valorMoneda = (monedasArray[0].valor)
            break
        case "euro":
            valorMoneda = (monedasArray[1].valor)
            break
        default:
            alert("Algo salio mal :(")
    }
    
    //si alguna de las condiciones no se cumplen no sera posible realizar la oprecion

    if (isNaN(calculo(datos, valorMoneda))) {
        alert("Algo salio mal :(")
    }

    else if ((moneda != "dolar") && (moneda != "euro")) {
        alert("Algo salio mal :(")
    }

    //si ambas se cumplen realizamos la opreacion

    else {
        alert (`${datos} pesos equivalen a ${calculo(datos, valorMoneda)} ${(moneda)}s`)
    }

    //el ciclo se puede terminar o seguir con un "si" o "no" que lo decide el usuario

    repetir = prompt("Quiere volver a convertir? escriba si o no").toLowerCase()
} while (repetir == "si");