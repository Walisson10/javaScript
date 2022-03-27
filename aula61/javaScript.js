var cont = 0
function verificar(){
    var num = window.document.getElementById("num").value
    var resul = 4
    var n=0
    var resp = window.document.getElementById("resposta")

    if(cont == 0){
        n = Math.floor(Math.random() * 10);
        resp.innerHTML += `${n}`
       
    }

    if(num == n){
        resp.innerHTML += `Você ganhou`
    }
    cont = cont + 1
    if(cont == resul){
        resp.innerHTML += `${n}` 
        cont = 0;
        num = 0;
        resp = ""
    }
    
}