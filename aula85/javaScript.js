var cadeira=[]
var ocup=[]

    for(var o=1; o<=10; o++){
        ocup[o]="--"
    }

function verificar(){
    var num = window.document.getElementById("num").value
    var resp = window.document.getElementById("resposta")

    resp.innerHTML = ""
    if(cadeira[num]=="--"){
        resp.innerHTML = "Cadeira esta ocupada, escolha outra"
    }else{
        for(var i=1; i<=10; i++){
            if(num == cadeira[i]){
               cadeira[i]="--" 
            }else{
                cadeira[i]=i
            }
            resp.innerHTML +=`${cadeira[i]}`
        }
    
    }

    
}