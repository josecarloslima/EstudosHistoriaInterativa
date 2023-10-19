function getStory(scene) {
    const scenes = {
        inicio: {
            title: "Início",
            text: "Texto do início da história...",
            choices: {
                cena1: "Ir para Cena 1",
                regras: "Ver Regras"
            }
        },
        cena1: {
            title: "Cena 1",
            text: "Texto da Cena 1...",
            choices: {
                cena2: "Ir para Cena 2",
                cena3: "Ir para Cena 3",
                fim: "Fim da História"
            },
            showRollDiceButton: true
        },
        cena2: {
            title: "Cena 2",
            text: "Texto da Cena 2...",
            choices: {
                cena1: "Voltar para Cena 1",
                cena3: "Ir para Cena 3",
                fim: "Fim da História"
            }
        },
        cena3: {
            title: "Cena 3",
            text: "Texto da Cena 3...",
            choices: {
                cena1: "Voltar para Cena 1",
                cena2: "Voltar para Cena 2",
                fim: "Fim da História"
            }
        },
        fim: {
            title: "Fim da História",
            text: "Fim da História. Obrigado por jogar!",
            choices: {}
        },
        regras: {
            title: "Regras",
            text: "Aqui estão as regras do jogo...",
            choices: {
                inicio: "Voltar ao Início"
            }
        },
        sucesso: {
            title: "Sucesso",
            text: "Você teve sucesso!",
            choices: {
                proximaCena: "Próxima Cena"
            }
        },
        falha: {
            title: "Falha",
            text: "Você falhou...",
            choices: {
                proximaCena: "Próxima Cena"
            }
        }
    };

    const currentScene = scenes[scene];

    if (!currentScene) {
        console.error(`Cena "${scene}" não encontrada.`);
        return;
    }

    let storyContent = `
        <h1>${currentScene.title}</h1>
        <p>${currentScene.text}</p>
    `;

    if (currentScene.choices) {
        for (const [key, value] of Object.entries(currentScene.choices)) {
            storyContent += `<button class="choice" data-target="${key}">${value}</button>`;
        }
    }

    if (currentScene.showRollDiceButton) {
        storyContent += `<button class="button" id="rolarDados">Rolar Dados</button>`;
    }

    document.getElementById('storyContent').innerHTML = storyContent;

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.target;
            getStory(target);
        });
    });

    if (currentScene.showRollDiceButton) {
        document.getElementById('rolarDados').addEventListener('click', rolarDados);
    }
}

// Restante do código (generateButtons e etc.)

function rolarDados() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    const sucesso = resultado >= 4;

    if (sucesso) {
        getStory('sucesso'); 
    } else {
        getStory('falha'); 
    }
}


function generateButtons() {
    const buttons = {
        inicio: "Início",
        site: "Site Externo",
        regras: "Regras"
    };

    let buttonHtml = '';
    for (const [key, value] of Object.entries(buttons)) {
        buttonHtml += `<button class="button" id="${key}">${value}</button>`;
    }

    document.querySelector('.container').innerHTML = buttonHtml;

    document.getElementById('inicio').addEventListener('click', function() {
        getStory('inicio');
    });

    document.getElementById('site').addEventListener('click', function() {
        window.location.href = 'https://www.siteexterno.com';
    });

    document.getElementById('regras').addEventListener('click', function() {
        getStory('regras');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateButtons();
    getStory('inicio');
});

function rolarDados() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    const sucesso = resultado >= 4;

    if (sucesso) {
        getStory('sucesso'); 
    } else {
        getStory('falha'); 
    }
}
