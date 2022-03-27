function verificar(){
    var num = [1,2,3,4,5,6]

    var resp = window.document.getElementById("resposta")

    for(var i = 0; i <= num.length-1 ; i++){
        resp.innerHTML += `${num[i]}`
      
        if( (num[i] % 2) == 0){
            resp.innerHTML += `<p>Par</p>`
        }else{
            resp.innerHTML += `<p>impar</p>`
        }
    }
}