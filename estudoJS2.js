function getStory() {
    return {

        // Objeto
        currentScene: "cena0",
        cena0: {
            titulo: "Introdução",
            imagem: " ",
            texto: "...",
            rolagem: " ",
            escolhas: [{
                    escolha: "...",
                    destino: 'cena1'
                }]
        },

        cena1: {
            titulo: "Título",
            imagem: " ",
            texto: "...",
            rolagem: " ",
            escolhas: [{
                escolha: "...",
                destino: 'cena0'
            }]
        }
    }
}

let story;
let cont = 0;

document.addEventListener('DOMContentLoaded', function () {
    let btn0 = document.querySelector('#btn')

    btn0.addEventListener('click', function () {
        story = getStory()
        renderScene()
    })
})

function renderScene() {
    const currentScene = story[story.currentScene];
    const title = currentScene.titulo === "Introdução" ? currentScene.titulo : '';
    const img = currentScene.imagem ? `<img src="${currentScene.imagem}" alt="Imagem">` : '';

    const content = `
        <center><h1>${title}</h1></center>
        <p>${currentScene.texto}</p>
        ${img}
        ${getInputs(currentScene.escolhas)}
    `;

    updateDOM(content);
}

function updateDOM(content) {
    document.getElementById("conteudo").innerHTML = content;
}

function getInputs(choices) {
    if (!choices) return "";

    return choices.map((choice, index) => `
        <div>
            <center><input type="button" id="btn${index}" destino="${choice.destino}" name="escolhas" class="botao${index}" value="${choice.escolha}" /></center>
        </div>
    `).join('');
}

function handleButtonClick(index) {
    const inputs = document.querySelectorAll('input[type="button"]');
    const destination = inputs[index].getAttribute('destino');

    if (story[destination]) {
        story.currentScene = destination;
        renderScene();
    } else {
        console.error(`Destino inválido: ${destination}`);
    }
}
