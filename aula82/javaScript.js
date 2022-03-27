function verificar(){
    var resp = window.document.getElementById("resposta")

    var n1=1
    var n2=1
    resp.innerHTML += "0 , 1, 1, "
    for(var i=1;i<5;i++){
        n2=parseInt(n1)+parseInt(n2)
        resp.innerHTML += `${n2}, `
        n1=parseInt(n1)+parseInt(n2)
        resp.innerHTML += `${n1}, `
    }
}