function telMask() {
    var tel_formatado = document.getElementById("tel").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("tel").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("tel").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("tel").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
}
function MascCPF() {
    var cpf = document.getElementById("Cpf").value;
    if (cpf[3] != ".") {
        if (cpf[3] != undefined) {
            document.getElementById("Cpf").value = cpf.slice(0, 3) + "." + cpf[3]
        }
    }
    if (cpf[7] != ".") {
        if (cpf[7] != undefined) {
            document.getElementById("Cpf").value = cpf.slice(0, 7) + "." + cpf[7]
        }
    }
    if (cpf[11] != "-") {
        if (cpf[11] != undefined) {
            document.getElementById("Cpf").value = cpf.slice(0, 11) + "-" + cpf[11]
        }
    }
}
function maskPassword() {
    const input = document.getElementById('pass');
    const fullValue = input.value;
    sessionStorage.setItem("senha", fullValue);
    console.log(fullValue);
    const maskedValue = '*'.repeat(fullValue.length - 1) + fullValue.slice(-1);
    input.setAttribute('data-masked', '*'.repeat(fullValue.length));
    input.value = maskedValue;
    setTimeout(() => {
        input.value = input.getAttribute('data-masked');
    }, 1500);
}

function modal() {
    let modal = document.getElementById('modl');
    let overlay = document.getElementById('overlay');

    if (modal.style.opacity == 0 || modal.style.opacity == '') {
        modal.style.opacity = 1;
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
    } else {
        modal.style.opacity = 0;
        overlay.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
            overlay.style.visibility = 'hidden';
        }, 500); // Matches CSS transition time
    }
}
function validateEmail() {
    let y = document.getElementById('mail')
    const email = y.value.trim();

    if (email === '') {
        return; // Ignore empty input
    }

    if (!email.includes('@')) {
        alert('Email Inválido!');
    }

}
function change(){
    window.location.href = 'User.html';
    alert("Cadastro Concluído Com Sucesso!")
    let nome = document.getElementById("nome");
    let mail = document.getElementById("mail");
    let cel = document.getElementById("tel");
    let cpf = document.getElementById("Cpf");
    let senha = document.getElementById("pass");

    sessionStorage.setItem("nome", nome.value);
    sessionStorage.setItem("mail", mail.value);
    sessionStorage.setItem("cel", cel.value);
    sessionStorage.setItem("cpf", cpf.value);
}
function Dados(){
    document.getElementById('nome1').value = sessionStorage.getItem("nome");
    document.getElementById('mail1').value = sessionStorage.getItem("mail");
    document.getElementById('tel1').value = sessionStorage.getItem("cel");
    document.getElementById('Cpf1').value = sessionStorage.getItem("cpf");
    document.getElementById('pass1').value = sessionStorage.getItem("senha");
}
function voltar(){
    window.location.href = "index.html";
}