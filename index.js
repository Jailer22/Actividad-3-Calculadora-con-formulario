function suma(num1, num2) {
    
    num1 = document.getElementById("valor1").value;
    num2 = document.getElementById("valor2").value;
    var total_suma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = total_suma;
}  

function resta(num1, num2) {
    num1 = document.getElementById("valor1").value;
    num2 = document.getElementById("valor2").value;
    var total_resta = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = total_resta;
}  

function multiplica(num1, num2) {
    num1 = document.getElementById("valor1").value;
    num2 = document.getElementById("valor2").value;
    var total_div = parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = total_div;
}  

function divide(num1, num2) {
    num1 = document.getElementById("valor1").value;
    num2 = document.getElementById("valor2").value;
    var total_div = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = total_div;
}  

