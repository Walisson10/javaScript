function verificar(){
    var num = window.document.getElementById("num").value
    var result = 0

    var resp=window.document.getElementById("resposta")

    for(var cont = 0;cont <=10; cont++){
        result = parseInt(num) * parseInt(cont)
        resp.innerHTML += `<p>${num} X ${cont} = ${result}</p>`
    }

    //resp.innerHTML += `${num}`

}