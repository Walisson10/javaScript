var cadeira = []
var ocupado = []
    for(var i=1; i<=10;i++){
        ocupado[i]= "--"
    }

function verificar(){
    var num = window.document.getElementById("num").value
    var resp = window.document.getElementById("resposta")

    resp.innerHTML = ""
    if(cadeira[num]=="--"){
        resp.innerHTML = `Cadeira ocupada, escolha outra!`
    }else{
        for(var cont=1; cont<=10; cont++){
            if(ocupado[cont] != "--"){
                cadeira[cont]="--"
            }else{
               
                cadeira[cont]=cont
            }
            if (num == cadeira[cont]) {
                cadeira[cont]= "--"
                ocupado[cont]=cont
            }
           
            resp.innerHTML += `${cadeira[cont]}`
        }
    }

   
}