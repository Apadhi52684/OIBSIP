function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value.toLowerCase(); 

    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = Math.round(inputTemperature * 9/5) + 32;
        document.getElementById("result").textContent = `Result is ${inputTemperature} degrees °C = ${convertedTemperature} degrees °F.`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = Math.round(inputTemperature - 32) * 5/9;
        document.getElementById("result").textContent = `Result is ${inputTemperature} degrees °F = ${convertedTemperature} degrees °C.`;
    } else {
        document.getElementById("result").textContent = 'Please select a valid unit.';
    }
}
function resetFields() {
    document.getElementById("num").value = "";
    document.getElementById("unit").value = "Select";
    document.getElementById("result").textContent = "";
}
