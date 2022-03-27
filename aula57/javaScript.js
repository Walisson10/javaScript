var cont = 0
var soma = 0

function verificar(){
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")

    document.getElementById("num").focus();
    soma = parseInt(soma) + parseInt(num)
    
    cont = cont + 1
    if(cont == 8){
        resp.innerHTML += `${soma}`
    }

}
