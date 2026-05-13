function validar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }
    if (email.trim() === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }
    if (assunto.trim() === "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }
    if (mensagem.trim() === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }
    
    return true;
}

function verificarOpcao() {
    let assunto = document.getElementById("assunto");
    let oculta = document.getElementById("oculta");

    if (assunto.value === "outro") {
        oculta.style.display = "block";
    } else {
        oculta.style.display = "none";
    }

    return true;

}