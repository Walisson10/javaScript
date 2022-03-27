var cadeira = []
var ocupado = []

    for(var cont=1;cont<=10;cont++){
        ocupado[cont]="--"
       
    }
function verificar(){
    var num = window.document.getElementById("num").value
    
    var resp = window.document.getElementById("resposta")
    resp.innerHTML = " "
    if(cadeira[num] == "--"){
        resp.innerHTML += `Cadeira ocupada, escolha outra!`
    }else{
   
        for(var  i=1; i<=10;i++){
            if(ocupado[i]=="--"){
                cadeira[i]=i
            }else{
                cadeira[i]="--"
            }
            if(num == cadeira[i]){
               cadeira[i]= "--"
               ocupado[i]=i
            }
            resp.innerHTML += `${cadeira[i]}`
        }
    }

   
     
}