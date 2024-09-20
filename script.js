let container = document.getElementById('container')
let pontos = 0

function iniciar() {
    container.innerHTML = '<p>Bem vindo ao teste para saber se você seria um bom Pablo Marçal</p>'
    container.innerHTML += '<p>Basta responder corretamente as perguntas</p>'
    container.innerHTML += '<button onclick="quest1()">Começar</button>'
}

function quest1() {
    container.innerHTML = '<p>Qual a pergunta correta?</p>'
    container.innerHTML += '<button onclick="quest2(1)">Como destravar o Mindset?</button>'
    container.innerHTML += '<button onclick="quest2(0)">Qual o jeito mais fácil de destravar o Mindset?</button>'
    container.innerHTML += '<button onclick="quest2(0)">Existe algum jeito de destravar o Mindset?</button>'
    container.innerHTML += '<button onclick="quest2(0)">Quais dicas para liberar o Mindset?</button>'
}

function quest2(point) {
    pontos += point
    container.innerHTML = '<p>Qual a pergunta correta?</p>'
    container.innerHTML += '<button onclick="quest3(0)">Quais são os 8 caminhos que levam à riqueza?</button>'
    container.innerHTML += '<button onclick="quest3(0)">O que eu preciso fazer para trilhar os 8 caminhos para a riqueza?</button>'
    container.innerHTML += '<button onclick="quest3(1)">Como posso seguir os 8 caminhos para a riqueza?</button>'
    container.innerHTML += '<button onclick="quest3(0)">Quais estratégias são recomendadas para alcançar a riqueza em 8 etapas?</button>'
}

function quest3(point) {
    pontos += point
    container.innerHTML = '<p>Qual a pergunta correta?</p>'
    container.innerHTML += '<button onclick="quest4(0)">Quais são os principais princípios do Código do Milhão?</button>'
    container.innerHTML += '<button onclick="quest4(1)">Como o Código do Milhão pode ajudar na conquista da liberdade financeira?</button>'
    container.innerHTML += '<button onclick="quest4(0)">O que é necessário para aplicar o Código do Milhão na prática?</button>'
    container.innerHTML += '<button onclick="quest4(0)">Quais estratégias são recomendadas pelo Código do Milhão para alcançar o sucesso financeiro?</button>'
}

function quest4(point) {
    pontos += point
    container.innerHTML = '<p>Como você faria para impedir um pane do Helicpotero assim que avistasse o aviso no painel antes do Piloto?</p>'
    container.innerHTML += '<button onclick="quest5(1)">Avisaria Calmamente o Piloto, fingindo calmaria para a minha familia</button>'
    container.innerHTML += '<button onclick="quest5(0)">Cobraria o Piloto caso me matesse</button>'
}

function quest5(point) {
    pontos += point
    container.innerHTML = '<p>Qual das opções é a correta?</p>'
    container.innerHTML += '<button onclick="quest6(1)">Devemos Instalar Drivers no Cerébro</button>'
    container.innerHTML += '<button onclick="quest6(0)">Devemos Instalar USB no cerébro</button>'
    container.innerHTML += '<button onclick="quest6(0)">Devemos trocar partes do nosso cerébro por Drivers</button>'
}

function quest6(point) {
    pontos += point
    container.innerHTML = '<p>Oque fazer em um acidente de transito?</p>'
    container.innerHTML += '<button onclick="quest7(0)">Xingar</button>'
    container.innerHTML += '<button onclick="quest7(1)">Bater Palma ao contrário</button>'
    container.innerHTML += '<button onclick="quest7(0)">Buzinar</button>'
}

function quest7(point) {
    pontos += point
    container.innerHTML = '<p>Quanto você deve cobrar para uma pessoa almoçar com você?</p>'
    container.innerHTML += '<button onclick="quest8(1)">R$: 5.000,00</button>'
    container.innerHTML += '<button onclick="quest8(0)">R$: 3.000,00</button>'
    container.innerHTML += '<button onclick="quest8(0)">R$: Strogonoff</button>'
}

function quest8(point) {
    pontos += point
    container.innerHTML = '<p>Quem quer copiar o seu cerébro?</p>'
    container.innerHTML += '<button onclick="quest9(0)">Chinênes</button>'
    container.innerHTML += '<button onclick="quest9(1)">Um engenheiro</button>'
    container.innerHTML += '<button onclick="quest9(0)">Nasa</button>'
}

function quest9(point) {
    pontos += point
    container.innerHTML = '<p>O que fazer para bombar denovo nas redes?</p>'
    container.innerHTML += '<button onclick="quest10(0)">Fala alguma coisa engraçada kkkk</button>'
    container.innerHTML += '<button onclick="quest10(1)">Banho de Chuva</button>'
    container.innerHTML += '<button onclick="quest10(1)">Planejar uma viagem ao Pico dos Marins no dia com as piores condições climaticas possiveis,<br> e com alta chance de morrer no processo.</button>'
}

function quest10(point) {
    pontos += point
    container.innerHTML = '<p>O que fazer em um debate para candidatura a prefeito de São Paulo?</p>'
    container.innerHTML += '<button onclick="calcPoints(1)">Fala um monte de merda pra levar uma cadeirada kkk</button>'
    container.innerHTML += '<button onclick="calcPoints(-1)">Agir plenamente diante da lei</button>'
    container.innerHTML += '<button onclick="calcPoints(100)">Xinga o João Vitor dos Santos</button>'
}

function calcPoints(point) {
    pontos += point
    if((pontos >= 0)&&(pontos < 3)) {
        img('pico', 'A vida é feita de picos e baixos,<br>nem sempre conseguimos chegar aonde queremos.')
    } else if ((pontos >= 3)&&(pontos < 5)) {
        img('bar','Você quase conseguiu!<br> Lembre-se sempre de começar com "como"')
    } else if ((pontos >= 5)&&(pontos < 7)) {
        img('cow','Meu amigo metade do caminho foi andando, <br> continue assim e você destravará o Mindset')
    } else if ((pontos >= 7)&&(pontos < 9)) {
        img('coptero','Você quase alcançou o topo, mas foi só quase mesmo')
    } else if ((pontos >= 8)&&(pontos <= 10)) {
        img('deira','VOCÊ DESTRAVO A FIGURINHA LENDÁRIA DO PABLO MARÇAL!!')
    } else if(pontos >= 100) {
        img('feliz', 'Você fez a escolha certa.')
    }
}

function img(name, text) {
    container.innerHTML = 'Parabéns você tirou: '+pontos+'/10!! <br>'
    container.innerHTML += text
    container.innerHTML += `<img src='img/pablo${name}.png' alt='${name}' width='50%'>`  
}



