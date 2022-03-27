var cont = 0
var somar = 0
var s = 0
var sidade = 0
var maior =0
var media = 0

function verificar(){
    var idade = window.document.getElementById("idade").value
    

    var resp = window.document.getElementById("resposta")

   
    cont = cont + 1

    sidade = (parseInt(sidade) + parseInt(idade))

   

    if(cont <= 10){
        resp.innerHTML += `${idade}, `
    }

    if(idade >= 18){
        somar = somar + 1
        
        
    }

    if(idade <=5){
        s = s + 1
      
      
        
    }
    if(parseInt(idade) > maior){
        maior = parseInt(idade)
    }
    if(cont >= 10){
        media = parseInt(sidade) / 10


        resp.innerHTML += `<p> menores de 5 tem: ${s}</p>`
      
        resp.innerHTML += `<p>maiores de 18 tem: ${somar}</p>`

        resp.innerHTML += `<p>${sidade}</p>`

        resp.innerHTML += `<p> ${media} </p>`

        resp.innerHTML += `<p>a maior idade digitada foi: ${maior}</p>`
        
    }
    

    window.document.getElementById("idade").value = ""
    window.document.getElementById("idade").focus()
}