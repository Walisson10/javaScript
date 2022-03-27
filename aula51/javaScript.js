function verificar(){

    var resp =  window.document.getElementById("resposta")
    var n = 0
    var m = 0
    var nume = 0
   for(var i  = 0; i < 10; i++){
        nume = parseInt(Math.floor(Math.random() * 10))
        resp.innerHTML += `${nume}`

        if((nume%3) == 0 ){
            n = n + 1
            resp.innerHTML += `</br>divisivel ${n}, `
        }
        if(nume >= 5){
            m = m + 1
            resp.innerHTML += `</br>maior que cinco ${m}, `
        }
   }
}