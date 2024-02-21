const nao = document.querySelector('#nao');
const sim = document.querySelector('#sim');
let sim_size = 10;

nao.onclick = () => {
    sim_size ++;
    sim.style.width = sim_size + 'vw';
    nao.style.position = 'absolute';
    nao.style.left = '1vw';
    nao.style.top = (Math.floor(Math.random() * 50) + 1) + 'vh';
    nao.style.left = (Math.floor(Math.random() * 50) + 1) + 'vw';
}

