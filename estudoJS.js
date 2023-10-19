// função que controla o texto
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

// Variáveis de controle do framework
let story;
let cont = 0;

// Programção dos botões
// Crio o evento que ficará monitorando os botões
document.addEventListener('DOMContentLoaded', function () {
    let btn0 = document.querySelector('#btn')

    // Crio o evento que dispara a aventura
    btn0.addEventListener('click', function () {
        story = getStory()
        renderScene()
    })
})

// Função que define o comportamento da cena
function renderScene(){
    // Verificação das cenas
    let ttl = ""
    let img = ""

    // Renderização de Imagem
    if (!story[story.currentScene].imagem){
        img = "<img></img>"
    }
    
    // Renderização de Título
    if (story[story.currentScene].titulo == "Introdução"){
        ttl = story[story.currentScene].titulo
    }
    
    // Renderização de Texto
    document.getElementById("conteudo").innerHTML = `<center><h1>${ttl}</h1></center><p>${story[story.currentScene].texto}</p>${img} ${getInputs()}`
    if (story[story.currentScene].imagem){
        document.querySelector("img").src = `${story[story.currentScene].imagem}`
    }
    
    // Programação dos Botoões
    btn0.addEventListener('click', function (){
        cont++
        getInputValue(0)
    })
}

// Seleção de destino
function getInputValue(x){
    let inputs = document.querySelectorAll('input[type="button"]')
    story.currentScene = inputs[x].getAttribute('destino')
    renderScene()
    return
}

// Captura de escolha
function getInputs(){
    let input = ""
    if (!story[story.currentScene].escolhas){
        return ""
    }        
    for (let i = 0; i < story[story.currentScene].escolhas.length; i++){
        input +=
        `<div>
			<center><input type="button" id="btn${i}" destino="${story[story.currentScene].escolhas[i].destino}" name="escolhas" class="botao${i}" value="${story[story.currentScene].escolhas[i].escolha}" /></center>
		</div>`
    }
    return input;
}