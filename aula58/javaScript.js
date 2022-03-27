var cont = 0 
var nsal = 0
var nsala = 0

function verificar(){
    var sexo = window.document.getElementById("sexo").value
    var sal = window.document.getElementById("sal").value
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")

    if(sexo == "m"){
        nsal = parseInt(nsal) + parseInt(sal)
    }

    if(sexo == "f"){
        nsala = parseInt(nsala) + parseInt(sal) 
    }

    cont = cont + 1
    if(cont == num){
        resp.innerHTML += `<p> salários pagos dos homens e o total pago ${nsal}</p>`
        resp.innerHTML += `${sal}` 

        resp.innerHTML += `<p>salários pagos as mulheres e o total pago  ${nsala}</p>`

    }

   

   
}