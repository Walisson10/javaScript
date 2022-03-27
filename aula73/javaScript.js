var sort = []


function verificar(){
    var c = 0
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")

    for(var cont= 1; cont <=30;cont++){
        sort[cont]= Math.floor(Math.random() * 16);
        //resp.innerHTML += `${sort[cont]}, `
        if(num == sort[cont]){
            c = c + 1
        }
        if (sort[cont] == num) {
           
            resp.innerHTML += `[${cont}]`
        }
    }
    resp.innerHTML += `<p>Você foi sorteado! ${c}</p>`
   
}
