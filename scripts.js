function calcular(){
    let dolar = document.getElementById("dolar").value;
    let peso = document.getElementById("peso").value;
    let ganancia = document.getElementById("ganancia").value;
    let producto = document.getElementById("producto").value;
    let margen = document.getElementById("margen").value;

    let cantidadProductos = 1/peso;
    let amortiguarDolar = parseInt(dolar) + parseInt(margen);
    let gananciaDineroCubano = amortiguarDolar * ganancia;
    let costoDineroCubano = dolar * producto;

    let dineroCubano = costoDineroCubano + (gananciaDineroCubano/cantidadProductos);

    document.getElementById("precio").innerHTML = dineroCubano;

}