var nm = []
var n=0

function verificar(){
    var nome = window.document.getElementById("nome").value
    var resp = window.document.getElementById("resposta")
    
    nm[n]=nome 

    n=n+1
    if(n==7){
        for(var i=0; i<nm.length;i++){
            resp.innerHTML += `${nm[i]},`  
        }
    n=0
       
    }
   

}