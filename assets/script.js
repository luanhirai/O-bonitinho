function selecionarPalestrante(palestrante) {
    let data, hora, talk1, talk2, talk3, imagemPalestrante;
    switch (palestrante) {
        case 'google':
            data = "24/10";
            hora = "19:00";
            talk1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            imagemPalestrante = "imagem-google.png"
        break;
        case "curso-em-video":
            data = "25/10";
            hora = "19:00";
            talk1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            imagemPalestrante = "imagem-curso-em-video.png"
        break;
        case "totvs":
            data = "26/10";
            hora = "19:00";
            talk1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            imagemPalestrante = "imagem-totvs.jpg"
        break;
        case "meta":
            data = "27/10";
            hora = "19:00";
            talk1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            imagemPalestrante = "imagem-meta.jpg"
        break;
        case "spotify":
            data = "28/10";
            hora = "19:00";
            talk1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            talk3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos, labore, pariatur accusantium id cumque placeat explicabo voluptatum voluptates dolorem officia eaque voluptas nemo! Blanditiis ullam dolorum veritatis consequatur eius!"
            imagemPalestrante = "imagem-spotify.png"
        break;
    }
    document.querySelector(".data-que-a-palestra-ocorrera").textContent = data;
    document.querySelector(".hora-que-a-palestra-ocorrera").textContent = hora;
    document.querySelector(".talk1").textContent = talk1;
    document.querySelector(".talk2").textContent = talk2;
    document.querySelector(".talk3").textContent = talk3;
    document.querySelector(".imagem-palestrante").src = "imagem/"+ imagemPalestrante;
}

var botaoSelecionado = null;

function selecionarBotao(botao) {
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('clicado');
    }
    
    botao.classList.add('clicado');
    botaoSelecionado = botao;
}

// INSERIR ESTE AQUI


// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault(); // Impede o envio padrão do formulário

//     // Realize a autenticação aqui (por exemplo, verifique se o CPF e a senha estão corretos)
//     // Se a autenticação for bem-sucedida, exiba a mensagem de pagamento confirmado
//     // Aqui, estamos usando um alerta como exemplo, você pode substituir por uma lógica real de autenticação
//     alert("Autenticação bem-sucedida. Pagamento confirmado!");

//     window.location.href = "cadastro-curso.html";
// });



function validarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Calcular o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Verificar o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== digito1) {
        return false;
    }

    // Calcular o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Verificar o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== digito2) {
        return false;
    }

    return true;
}

function mostrarModal() {
    if(!validarCPF($("#cpf").val()))
    {
        alert("CPF INVALIDO");

    }
    else if($("#ra").val().length == 9)
        document.getElementById("modalOverlay").style.display = "block";
    else
        alert("RA INVALIDO");

}

function mostrarBoleto() {
    document.getElementById("boletoOverlay").style.display = "block";
}

function simularPagamento() {
    // Lógica para simular o pagamento (pode ser implementada aqui)
    alert("Pagamento confirmado!");
    window.location.href = "index.html";
}