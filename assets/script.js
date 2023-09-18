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