function verificar(){
    var cont = window.document.getElementById("cont").value
    var num = 0

    var resp = window.document.getElementById("resposta")

    for(var i =0; i <= cont; i++){
       while(num<cont){
        num = parseInt(num) + 5
           resp.innerHTML += `${num}`
          
       }
    }
}