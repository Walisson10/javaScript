var kk = []
var somar = 0
var vez=0

function verificar(){
    var num = window.document.getElementById("num").value
    var resp = window.document.getElementById("resposta")
    
    resp.innerHTML = ``
    kk.push(parseInt(num))
    vez++
   
    
    if(vez>=7){
        for (var i = 0; i <= kk.length-1; i++){
           somar = somar + kk[i]
        }
        resp.innerHTML += `${somar}`
        vez=0
        kk = []
        somar=0
    }
}