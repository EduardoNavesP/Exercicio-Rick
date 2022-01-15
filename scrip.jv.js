const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector ('#specie');
const condicao = document.querySelector('#status');

pegarPersonagem = () => {
    
    return fetch('https://rickandmortyapi.com/api/character/3', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }