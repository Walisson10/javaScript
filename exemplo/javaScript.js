function verificar(){
    var num = window.document.getElementById("num").value
    var cont = 0
    var resp = window.document.getElementById("resposta")

    while(num >= cont){
        resp.innerHTML += ` ${num}`
        num = num - 50
        
    }
    
}