
var resultado = document.getElementById('res');



function identify(pais){
    if(pais == 'br'){
       caractere = {cor1: 'verde', cor2: 'amarelo', cor3: 'azul'}

       
    }

    var forma = document.createElement('div')
    forma.setAttribute('width', '50px')
    forma.style.backgroundColor = 'black';

    resultado.style.textAlign= 'center'
    resultado.appendChild(forma)
}

function clickBRA(){
    let name = 'br'

    identify(name)
}