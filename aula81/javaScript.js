var cadeira = []
var ocup = []

    for(var c=1; c<=10; c++){
        ocup[c]="--"
    }

function verificar(){
    var num = window.document.getElementById("num").value
    
    var resp = window.document.getElementById("resposta")
    resp.innerHTML = ""
    if(cadeira[num]=="--"){
        resp.innerHTML += `A cadeira esta reservada escolha outra!`
    }else{
        for(var i=1; i<=10; i++){
            if(ocup[i]!= "--"){
                cadeira[i]="--"
            }else{
                cadeira[i]=i
            }
            if(num == cadeira[i]){
                cadeira[i]="--"
                ocup[i]=i
            }
            resp.innerHTML += `${cadeira[i]}`
        }
    }
  
}