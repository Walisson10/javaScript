var cont = 0
var ida = 0

function verificar(){
    var idade = window.document.getElementById("idade").value
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")

    cont = parseInt(cont) + 1

    ida = parseInt(ida) + parseInt(idade)
    media = parseInt(ida) / parseInt(num)

    if(cont == num){
        resp.innerHTML += `<p>A quantidade de idade digita foi: ${num}</p>`
        resp.innerHTML += `<p>A media de idade é: ${media}</p>`
    }


    
}