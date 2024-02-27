function validarSenha(senha) {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    // Verificar se a senha contém letras maiúsculas, minúsculas, números e caracteres especiais
    const possuiMaiuscula = /[A-Z]/.test(senha);
    const possuiMinuscula = /[a-z]/.test(senha);
    const possuiNumero = /\d/.test(senha);
    const possuiEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha);

    // Retornar verdadeiro se a senha atender a todos os critérios
    return possuiMaiuscula && possuiMinuscula && possuiNumero && possuiEspecial;
}

// Exemplo de uso
const senha1 = "Senha123!";
const senha2 = "senha";
const senha3 = "SenhacomletrasENumeros";
const senha4 = "Senha@123";

console.log(validarSenha(senha1)); // true
console.log(validarSenha(senha2)); // false
console.log(validarSenha(senha3)); // false
console.log(validarSenha(senha4)); // true

function validarFormulario() {
    // Obter o valor da senha do input
    const senhaInput = document.getElementById("senha");
    const senha = senhaInput.value;

    // Verificar se a senha é válida
    const isValid = validarSenha(senha);

    // Atualizar a mensagem no parágrafo
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = isValid ? "Senha válida!" : "Senha inválida!";
    mensagemElement.className = isValid ? "success" : "error";

    // Impedir o envio do formulário
    return false;
}

function validarSenha(senha) {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    // Verificar se a senha contém pelo menos uma letra maiúscula
    const possuiMaiuscula = /[A-Z]/.test(senha);

    // Verificar se a senha contém pelo menos uma letra minúscula
    const possuiMinuscula = /[a-z]/.test(senha);

    // Verificar se a senha contém pelo menos um número
    const possuiNumero = /\d/.test(senha);

    // Verificar se a senha contém pelo menos um caractere especial
    const possuiEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha);

    // Verificar se a senha atende a todos os critérios
    if (!(possuiMaiuscula && possuiMinuscula && possuiNumero && possuiEspecial)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
        return false;
    }

    // Se a senha atender a todos os critérios, retornar verdadeiro
    return true;
}

// Exemplo de uso
const senha = "senha";
const senhaValida = validarSenha(senha);


