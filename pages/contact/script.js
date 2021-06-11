let btn = document.getElementById("send");
let messages=[]

btn.onclick = function (){
    let infos={
        nome:document.getElementById("name").value,
        assunto:document.getElementById("subject").value,
        mensagem:document.getElementById("message").value,
    };
    
    if(infos.nome.length === 0){
        alert("Por favor insira seu nome")
        return 1;
    }
    else if(infos.assunto.length === 0){
        alert("Por favor insira um assunto")
        return 2;
    }
    else if(infos.mensagem.length === 0){
        alert("Por favor insira uma mensagem")
        return 3;
    }

    messages.push(1);

    if(messages.length>0){
        document.getElementById("form").setAttribute("class", "formFull")
        document.getElementById("messageContainer").style.display="block"
    }
    else{
        document.getElementById("form").setAttribute("class", "formulario")
        document.getElementById("messageContainer").style.display="none"
    }

    let novaMensagem=document.createElement("div")
    novaMensagem.setAttribute("class", "mensagem");
    let msgNome =document.createElement("h2")
    let msgAssunto=document.createElement("h3")
    let msgTexto=document.createElement("p")
    msgNome.innerHTML(infos.nome)
    msgAssunto.innerHTML(infos.assunto)
    msgTexto.innerHTML(infos.mensagem)
    novaMensagem.appendChild(msgNome)
    novaMensagem.appendChild(msgAssunto)
    novaMensagem.appendChild(msgTexto)



    document.getElementById("messageContainer").appendChild(novaMensagem)


}