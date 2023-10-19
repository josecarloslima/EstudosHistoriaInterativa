let des = document.getElementById('txtDES');
let forcaElement = document.getElementById('txtFOR');

let aFIS = {
    destreza: '',
    forca: '',
    tolerancia: '',
    reflexo: ''
}

function atualizarAFIS(propriedade, valor) {
    aFIS[propriedade] = valor;
}

let aMEN = {
    inteligencia: '',
    percepcao: '',
    carisma: '',
    vontade: ''
}

// Evento para atualizar os valores nos objetos
des.addEventListener('change', function() {
    aFIS.destreza = des.value;
});

forcaElement.addEventListener('change', function() {
    aFIS.forca = forcaElement.value;
});

function exibirFicha() {
    let fichaExibida = document.getElementById('fichaExibida');
    let camposEntrada = document.getElementById('camposEntrada');

    let fichaHTML = `
        <h3>Atributos Físicos</h3>
        <p>Destreza: ${aFIS.destreza}</p>
        <p>Força: ${aFIS.forca}</p>
        <p>Tolerância: ${aFIS.tolerancia}</p>
        <p>Reflexo: ${aFIS.reflexo}</p>

        <h3>Atributos Mentais</h3>
        <p>Inteligência: ${aMEN.inteligencia}</p>
        <p>Percepção: ${aMEN.percepcao}</p>
        <p>Carisma: ${aMEN.carisma}</p>
        <p>Vontade: ${aMEN.vontade}</p>
    `;

    fichaExibida.innerHTML = fichaHTML;
    camposEntrada.style.display = 'none';
    fichaExibida.style.display = 'block';
}

function voltarParaEntrada() {
    let fichaExibida = document.getElementById('fichaExibida');
    let camposEntrada = document.getElementById('camposEntrada');

    fichaExibida.style.display = 'none';
    camposEntrada.style.display = 'block';
}
