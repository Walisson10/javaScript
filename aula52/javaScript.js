var maior = 0 
var menor =0
var cont =0
function verificar(){
    var p1 = parseInt(window.document.getElementById("p1").value)

    var resp = window.document.getElementById("resposta")
    if(cont == 0){
        menor = p1
        resp.innerHTML = ""
    }
    if(p1 > maior){
        maior = p1
       
    }
    

    if(p1 < menor){
        menor = p1
        
    }

    
    
    
    cont = cont + 1
    
    window.document.getElementById("p1").value = ""
    if(cont >= 8){
        resp.innerHTML += `<p>Maior: ${maior}</p>`

        resp.innerHTML += `<p>Menor: ${menor}</p>`
        maior = 0 
        menor = 0
        cont = 0
    }
}