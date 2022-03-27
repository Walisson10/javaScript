var cont = 0
var ale = 0

function verificar(){
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")

    if(cont == 0){
        document.getElementById("resposta").innerHTML = ""
        ale = Math.floor(Math.random() * 10);
    }
   
    cont = cont + 1
    if(cont <= 4){
        if(num == ale){
            resp.innerHTML += `Você é vitorioso`
            cont = 0
            ale = 0
           
            
        }
        if(cont == 4){
            resp.innerHTML += `Você perdeu`
            cont = 0
            ale = 0

           
          
        }
    }
   
   
   
    
}