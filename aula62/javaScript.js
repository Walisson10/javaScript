function verificar(){
    var num = window.document.getElementById("num").value
    var cont = 0
    var salto = window.document.getElementById("salto").value
    var resp = window.document.getElementById("resposta")

    while(cont <= num){
        resp.innerHTML += `${cont}`
        cont = parseInt(cont) + parseInt(salto)
    }
}