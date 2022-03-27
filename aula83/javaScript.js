var matriz = [[1,2,3],[4,5,6],[7,8,9]];

function verificar(){
    var num = window.document.getElementById("num").value
    var num1 = window.document.getElementById("num1").value
    var resp = window.document.getElementById("resp")

    resp.innerHTML = ""
    for(var l=0; l<3;l++){
        resp.innerHTML += "|"
        for(var c=0; c<3; c++){
            if(num == matriz[l][c]){
                matriz[l][c]="x"
            }
            if(num1 == matriz[l][c]){
                matriz[l][c]="o"
            }
            resp.innerHTML += ` ${matriz[l][c]} `
            resp.innerHTML += "|"
            
            
        }
        resp.innerHTML += "<br>"
        
    }   


}