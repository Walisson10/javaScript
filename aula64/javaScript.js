var cont = 0
var somafinal = 0
var menor = 0
var media = 0
var pares = 0

function verificar(){
    var num = window.document.getElementById("num").value
    var numero = window.document.getElementById("numero").value

    var resp = window.document.getElementById("resposta")

    somafinal = parseInt(somafinal) + parseInt(numero)
    media = parseInt(somafinal)/parseInt(num)

    if(cont == 0 ){
        menor = numero
    }

    if(parseInt(numero) < parseInt(menor)){
        menor = numero
    }

    if(parseInt(numero)%2 == 0){
        pares = pares + 1
    }

    resp.innerHTML += `${numero}` 

    cont = cont + 1

    if(cont == num){
        resp.innerHTML += `<p> somatório entre todos os valores: ${somafinal}</p>`
        resp.innerHTML += `<p> Qual foi o menor valor digitado: ${menor}</p>`
        resp.innerHTML += `<p> A média entre todos os valores: ${media}</p>`
        resp.innerHTML += `<p> Quantos valores são pares: ${pares}</p>`

        cont = 0
        somafinal = 0
        menor = 0
        media = 0
        pares = 0
    }
}