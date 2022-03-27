var cont = 0
var media = 0
var idam = 0

function verificar(){
    var num =window.document.getElementById("num").value
    var idade = window.document.getElementById("idade").value

    var resp = window.document.getElementById("resposta")

    media = parseInt(idade) / parseInt(num)

    if(idade >= 21){
        idam = idam + 1
    }

    cont =  cont + 1
    
    if(cont == num){
        resp.innerHTML += `<p>Quantas idades foram digitadas ${num}</p>`
        resp.innerHTML += `<p> Qual é a média entre as idades digitadas${media}</p>`
        resp.innerHTML += `<p> Quantas pessoas tem 21 anos ou mais ${idam}</p>`
        
        cont = 0
        media = 0
         idam = 0
    }

}