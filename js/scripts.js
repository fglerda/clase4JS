
calculate();
function calculate() {
    const producto1 = prompt("Ingrese el precio del primer producto");
    const producto2 = prompt("Ingrese el precio del segundo producto");
    const producto3 = prompt("Ingrese el precio del tercer producto");
    const total = parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
    alert("El total de la compra  en un pago es: " + total);
    const cuotas = total / parseInt(prompt(("Seleccione la cantidad de cuotas: ")))
    alert("El valor de las cuotas es de: " + cuotas)
}

