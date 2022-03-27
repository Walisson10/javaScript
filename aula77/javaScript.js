function verificar(){
    var matriz = [l,c]
    var resp =window.document.getElementById("resposta")

    for(var l=0;l<=3;l++){
        for(var c=0;c<=3;c++){
            matriz[c]=c
            resp.innerHTML += `${matriz[l,c]}`
        }
         resp.innerHTML += `<br>`  
    }

}