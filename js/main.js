const valor = document.querySelector('#inputNumber');
const nPessoas = document.querySelector('#peopleNum');
const botoes = document.querySelectorAll(".botao")

console.log(botoes)

window.addEventListener('click', event => {
    let evento = event.target;
    console.log(evento)
    if(evento.className == "botao" || evento.className == "botao focado" ){
        if(evento.className == "focado" || evento.className == "botao focado"){}
        console.log("Entrou no IF")
        for(let i in botoes){
            botoes[i].classList.remove('focado')
        }
        evento.classList.toggle('focado')
    }
})