function verificar(){
    var num=window.document.getElementById("num").value
    var passo1=1
    var passo2=1
    var resp = window.document.getElementById("resposta")

    resp.innerHTML += `0, 1 , 1,`

    for(var cont =3; cont < num; cont+=2){
        passo1 = parseInt(passo1) + parseInt(passo2) 
        resp.innerHTML += ` ${passo1}, `
        passo2 = parseInt(passo2) + parseInt(passo1)
        resp.innerHTML += ` ${passo2}, `
    }

}