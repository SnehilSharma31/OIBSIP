var input = document.getElementById('input');
var result = document.getElementById('result'); 
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var convertButton = document.getElementById('convertButton');

var inputTypeValue, resultTypeValue;

convertButton.addEventListener("click", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() 
{
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "Celsius" && resultTypeValue === "Celsius") {
        result.value = Number(input.value);
    } 
    
    else if (inputTypeValue === "Celsius" && resultTypeValue === "Kelvin") {
        result.value = Number(input.value) + 273.15;
    } 
    
    else if (inputTypeValue === "Celsius" && resultTypeValue === "Fahrenheit") {
        result.value = ((Number(input.value) * 9) / 5) + 32;
    } 
    
    else if (inputTypeValue === "Kelvin" && resultTypeValue === "Celsius") {
        result.value = Number(input.value) - 273.15;
    } 
    
    else if (inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
        result.value = Number(input.value);
    } 
    
    else if (inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit") {
        result.value = ((Number(input.value) - 273.15) * 0.555556) + 32;
    } 
    
    else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Celsius") {
        result.value = (Number(input.value) - 32) * 0.555556;
    } 
    
    else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Kelvin") {
        result.value = ((Number(input.value) - 32) * 0.555556) + 273.15;
    } 
    
    else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Fahrenheit") { 
        result.value = input.value;
    }
}
