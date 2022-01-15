const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const genetica = document.querySelector ('#genetica');
const condicao = document.querySelector('#status');

gerarValorAletorio = () => {
    return Math.floor(Math.random() *5);
}
pegarPersonagem = () => {
    
    return fetch('https://rickandmortyapi.com/api/character/${numeroAletorio}', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status
    });
}

botao.onclick = pegarPersonagem