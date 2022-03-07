function mostrar() {
    if(document.getElementById("card-function").style.display === 'none') {
        document.getElementById("card-function").style.display = 'flex';

    }else {
        document.getElementById("card-function").style.display = 'none';

    }
}

function enviar() {
    if(document.getElementById("enviar-function").style.display === 'none') {
        document.getElementById("enviar-function").style.display = 'flex';
        console.log("ooo")
    }else {
        document.getElementById("enviar-function").style.display = 'none';
        console.log("oiii")

    }
}