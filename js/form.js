const form = document.getElementById('form-contato');

if(form.addEventListener){
    form.addEventListener('submit', validaForm)
} else if (form.attachEvent){
    form.attachEvent('onsubmit', validaForm)
}

function validaForm(evt){
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const campErro = ("");

    if(nome.value == ""){

        nome.style.border = "2px solid orange";
        nome.focus();
        return false;
        }else{
            nome.style.border = "2px solid blue"
        }

    if(sobrenome.value ==""){
        sobrenome.style.border = "2px solid orange";
        sobrenome.focus();
        return false
    }else{
        sobrenome.style.border = "2px solid blue"
    }
            

    if(email.value =="" || email.value.indexOf('@')==-1 ||email.value.indexOf('.')==-1){

        email.style.border = "2px solid orange"
        email.focus();
        return false;
    }else{

    email.style.border = "2px solid blue";
         
}
if(mensagem.value == ""){
    mensagem.style.border = "2px solid orange"
    mensagem.focus();
    return false;
    }else{
        mensagem.style.border = "2px solid blue"
    }

    if (campErro > ""){
        evt.preventDefault();
    }
}
