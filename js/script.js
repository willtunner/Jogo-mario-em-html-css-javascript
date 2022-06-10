//Pega img pelo css
const mario = document.getElementById('mario');
const pipe = document.querySelector('.pipe');

// função para add class na img
const jump = () => {
    // add class na img
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    // pega uma posição em px que é uma string, temos que remover o px e deixar somente o numero 
    // add o replace e removendo pra vazio
    // o sinal de + converte string para numero
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');// printa somente os numeros
    //console.log(marioPosition);

    const scoreLabel = document.getElementById('score').value;
    
    const score = 0;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        // para o tudo na posição que ele encostar no mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // para o tudo na posição que ele encostar no mario
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // img mario game over
        mario.src = './images/game-over.png'
        mario.style.width = '75px';
        mario.style.left = '50px'
    }


}, 5);

document.addEventListener('keydown', jump);