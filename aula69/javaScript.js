var ocupado=[]

for(cont = 1; cont <=10; cont++){
  ocupado[cont]="--"
}

function verificar(){
    var num = window.document.getElementById("num").value
    var cadeira = []

    var resp = window.document.getElementById("resposta")
    resp.innerHTML = "" 
    if(ocupado[num] == "--"){
        for(var i = 1; i <= 10; i++){
            if(ocupado[i]!="--"){
                cadeira[i]="--"
            }else{
                cadeira[i]=i
            }

             if(num == cadeira[i]){
                 cadeira[i]= "--"
                 ocupado[i]= num
             }
             resp.innerHTML += `${cadeira[i]}`
         }        
    }else{
       
        resp.innerHTML += `A cadeira esta ocupada, escolha outra!` 
    }

        
    

}