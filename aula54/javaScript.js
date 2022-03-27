
var cont = 0
var sm = 0
var sf = 0
var soma = 0
var media = 0
var midade = 0
var m = 0
var md = 0

function verificar(){
    var sexo = window.document.getElementById("sexo").value
    var idade = window.document.getElementById("idade").value

    var resp = window.document.getElementById("resposta")
    
    resp.innerHTML += `<p>${sexo}</p>`
    resp.innerHTML += `<p>${idade}</p>`

    

    if(sexo == "m"){
        sm = parseInt(sm) + 1
        midade = parseInt(midade) + parseInt(idade)
        m = midade / 5
    }
    if(sexo == "f"){
        sf= parseInt(sf) + 1
        if(idade >= 20){
            md = md + 1
        }
    }
    soma = parseInt(soma) + parseInt(idade)
    media = parseInt(soma) / 5

    cont = cont + 1

    if(cont == 5){
        resp.innerHTML += `<p>Foram digitado ${sm} masculino</p>`
        resp.innerHTML += `<p>Foram digitado ${sf} feminino</p>`
        resp.innerHTML += `<p>soma das idade é ${soma} </p>`
        resp.innerHTML += `<p>A média de idade do grupo ${media} </p>`
        resp.innerHTML += `<p>A media de idade entre os homens é ${m}`
        resp.innerHTML += `<p>Quantas mulheres tem mais de 20 anos ${md}</p>`

        cont = 0
        sm = 0
        sf = 0
        soma = 0
        media = 0
        midade = 0
        m = 0
        md = 0
        
    }
    window.document.getElementById("sexo").focus()
   
} 