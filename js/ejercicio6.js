/*

    let suma = 0
    let resta = 0
    let multiplicacion = 1
    let division = 1
    let input
    
    while (true) {
        input = prompt("Ingrese un número o '=' para finalizar:")
        if (input === "=") {
            let operacion = prompt("Ingrese 'suma', 'resta', 'división' o 'multiplicación' dependiendo qué quiera calcular")
            if(operacion === "suma"){
                console.log("La suma de los números ingresados es: " + suma)
            }

            if(operacion === "resta"){
                console.log("La resta de los números ingresados es: " + resta)
            }
             
            if(operacion === "multiplicación"){
                console.log("La multiplicación de los números ingresados es: " + multiplicacion)
            }

            if(operacion === "división"){
                console.log("La división de los números ingresados es: " + division)
            }
            break;
        }
        const numero = parseFloat(input)
        
        if (!isNaN(numero)) {
            suma += numero
            resta -= numero
            multiplicacion *= numero
            division /= numero
        } else {
            console.log("Por favor, ingrese un número válido.")
        }
    }

*/