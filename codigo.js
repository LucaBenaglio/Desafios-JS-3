let datos, moneda, valorMoneda
let repetir = "no"

//creamos la funcion con la operacion

const calculo = (datos, valorMoneda) => datos / valorMoneda;

do {
    alert("Bienvenido a mi convertidor de pesos argentinos a euro/dolar")

    //creamos el ingrese de datos y los posibles resultados erroneos que nos puede ingresar

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
            valorMoneda = 238
            break
        case "euro":
            valorMoneda = 231
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