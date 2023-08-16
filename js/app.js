// criamos uma variável para pegar o id reposta
const resultado = document.getElementById('resultado');

// criamos a função que verifica se uma resposta é correta.
function verificar(resposta, prox) {
    if (resposta === 'd') {
        resultado.innerHTML = 'Resposta correta';
        resultado.style.color = 'green';
        setTimeout(function(){
            window.location.href = prox;
        }, 2000);
    } else {
        resultado.innerHTML = 'Respota incorreta';
        resultado.style.color = 'red'
    };
};