var cont = 0
var media = 0 
var soma = 0
var kg = 0
var mkg = 0
var altm = 0
var alt = 0 
var pes = 0
function verificar(){
    var altura = window.document.getElementById("altura").value
    var peso = window.document.getElementById("peso").value

    var resp  = window.document.getElementById("resposta")

    soma = parseFloat(soma) + parseFloat(altura)
    media = parseFloat(soma)/ 7

    cont = cont + 1
    if(peso >= 90){
        kg = kg +1
    }
    if(peso <=50){
        mkg = mkg + 1
    }
    if(altura <= 1.6){
        altm = altm + 1

    }
    if(altura >= 1.9){
        alt = alt + 1
    }
    if(peso >= 100){
        pes = pes + 1
    }
    if(cont == 7){
        resp.innerHTML += `<p> A media ${media}</p>`
        resp.innerHTML += `<p> Quantas pessoas pesam mais de 90Kg ${kg}</p>`
        resp.innerHTML += `<p> Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m ${mkg },  ${ altm} </p>`
        resp.innerHTML += `<p> Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg ${alt }, ${ pes} </p>`
      
        cont = 0
        media = 0 
         soma = 0
         kg = 0
         mkg = 0
         altm = 0
         alt = 0 
         pes = 0
    }
}