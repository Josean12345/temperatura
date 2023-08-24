/*const f = 76;

function FaC(f) {
    return (f - 32) * (5 / 9);
}

let Imprimirf = FaC(f);


function agregar(Imprimirf){
    document.getElementById('pantalla').value +=Imprimirf
    }

*/

function convertirACelsius() {

    let entradaFarenheit = parseFloat(document.getElementById('entradaFarenheit').value);


if (!isNaN(entradaFarenheit)) {
    let celsius = (entradaFarenheit - 32) * (5 / 9);

    document.getElementById('salidaCelsius').value = ` ${celsius.toFixed(2)}ºC`;
} else {

    document.getElementById('salidaCelsius').value = 'Error'
}
}