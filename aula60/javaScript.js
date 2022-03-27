var cont = 0

function verificar(){
    var sexo = window.document.getElementById("sexo").value
    var idade = window.document.getElementById("idade").value
    var num = window.document.getElementById("num").value

    var resp = window.document.getElementById("resposta")
   


    cont = cont + 1
    resp.innerHTML += `<p>${sexo}</p>`
    resp.innerHTML += `<p>${idade}</p>`
    if(cont == num){
        resp.innerHTML += `final`
        cont = 0
        num = 0
        window.document.getElementById("sexo").value=""
        window.document.getElementById("idade").value=""
        window.document.getElementById("num").value=""
       
        
    }


}