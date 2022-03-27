var cadeirac = []
var cadeiraoc = [] 

for(cont = 1; cont <= 10;cont++){
    cadeiraoc[cont]= "--"
}

function verificar(){
    var num = window.document.getElementById("num").value
    var resp = window.document.getElementById("resposta")
    resp.innerHTML = ``
    if (cadeiraoc[num]!="--") {
        resp.innerHTML = `digite outra cadeira esta ja foi reservada`
    }else{
    
        for(i = 1; i<=10;i++){
            cadeirac[i]=i
            if(cadeiraoc[i]!="--"){
                cadeirac[i]="--"
            }
            if (num == cadeirac[i]) {
            
                cadeirac[i] = "--"
                cadeiraoc[i]=i  
            }
            resp.innerHTML += `${cadeirac[i]}`
        }
    }
    
   
}