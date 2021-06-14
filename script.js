let btnSend = document.getElementById("send");
let messages=[];
document.getElementById("messageContainer").on= ()=>{
    alert("mudou")
}

btnSend.onclick = ()=>{
    let infos={
        nome:document.getElementById("name").value,
        assunto:document.getElementById("subject").value,
        mensagem:document.getElementById("message").value,
    };
    
    if(infos.nome.length === 0){
        alert("Por favor insira seu nome");
        return 1;
    }
    else if(infos.assunto.length === 0){
        alert("Por favor insira um assunto");
        return 2;
    }
    else if(infos.mensagem.length === 0){
        alert("Por favor insira uma mensagem");
        return 3;
    }

    
    let novaMensagem=document.createElement("div");
    novaMensagem.setAttribute("class", "mensagem");
    novaMensagem.setAttribute("nome",infos.nome)

    let msgNome =document.createElement("h2");
    let msgAssunto=document.createElement("h3");
    let msgTexto=document.createElement("p");
    let msgDelete=document.createElement("button");
    
    msgNome.innerHTML=infos.nome;
    msgAssunto.innerHTML=infos.assunto;
    msgTexto.innerHTML=infos.mensagem;
    msgDelete.innerHTML="X";
    msgDelete.setAttribute("id","remove");
    
    novaMensagem.appendChild(msgDelete);
    novaMensagem.appendChild(msgNome);
    novaMensagem.appendChild(msgAssunto);
    novaMensagem.appendChild(msgTexto);

    document.getElementById("messageContainer").appendChild(novaMensagem);
    
    messages.push(infos.nome);

    console.log(messages)

    msgDelete.onclick = ()=>{
        nome=novaMensagem.getAttribute("nome")
        index=messages.findIndex((element)=>{
            if(element === nome)
                return element;
        });
        messages.splice(index, 1);
        document.getElementById("messageContainer").removeChild(novaMensagem);
        if(messages.length>0){
            document.getElementById("form").setAttribute("class", "formFull")
            document.getElementById("messageContainer").setAttribute("class","messagesFull");
        }
        else{
            document.getElementById("form").setAttribute("class", "formulario")
            document.getElementById("messageContainer").setAttribute("class","messages");
        }
    }


    if(messages.length>0){
        document.getElementById("form").setAttribute("class", "formFull")
        document.getElementById("messageContainer").setAttribute("class","messagesFull");
    }
    else{
        document.getElementById("form").setAttribute("class", "formulario")
        document.getElementById("messageContainer").setAttribute("class","messages");
    }
}


let credit = document.getElementById("cred_btn");
credit.onclick = () => {
    alert("Desenvolviment de Software para Web - 2021.1 \n Equipe: Lamec Vasconcelos, Gilberto Júnior e Warton Cabral")
}