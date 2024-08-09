const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está participando de uma feira de ciências e vê um projeto de IA que pode prever padrões climáticos com alta precisão. Qual é a sua opinião sobre esse tipo de tecnologia?",
        alternativas: [
            {
                texto: "Isso pode ser muito útil para melhorar a previsão do tempo e ajudar na preparação para desastres naturais.",
                tipo: "benefício"
            },
            {
                texto: "Fico preocupado com a precisão dos dados e o potencial de erros na previsão que poderiam ter consequências graves.",
                tipo: "preocupação"
            }
        ]
    },
    {
        enunciado: "Durante uma discussão em sala de aula, um colega sugere que a IA deve ser usada para monitorar o desempenho dos alunos e fornecer feedback automático. Como você responde a essa ideia?",
        alternativas: [
            {
                texto: "Acho uma boa ideia, pois pode oferecer um feedback rápido e personalizado para ajudar os alunos a melhorar seu desempenho.",
                tipo: "aplicação"
            },
            {
                texto: "Prefiro que o feedback seja dado por professores, pois eles podem oferecer uma perspectiva mais humana e compreensiva.",
                tipo: "preferência"
            }
        ]
    },
    {
        enunciado: "Imagine que uma empresa oferece uma IA que pode criar arte baseada nas preferências do usuário. Você acha que isso é uma boa forma de promover a criatividade?",
        alternativas: [
            {
                texto: "Sim, pois pode inspirar pessoas e democratizar o acesso à criação artística.",
                tipo: "benefício"
            },
            {
                texto: "Não, pois pode diminuir o valor da arte criada por humanos e limitar a expressão artística genuína.",
                tipo: "preocupação"
            }
        ]
    },
    {
        enunciado: "Você lê um artigo sobre o uso de IA para diagnosticar doenças de forma mais rápida e precisa. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Acredito que isso pode revolucionar a medicina, tornando os diagnósticos mais rápidos e reduzindo erros.",
                tipo: "benefício"
            },
            {
                texto: "Estou preocupado com a possibilidade de dependência excessiva da tecnologia e o impacto no julgamento humano dos médicos.",
                tipo: "preocupação"
            }
        ]
    },
    {
        enunciado: "Você está explorando um aplicativo de IA que recomenda livros baseados nas suas leituras anteriores. Como você acha que a IA pode impactar o mercado editorial?",
        alternativas: [
            {
                texto: "Pode ajudar leitores a descobrir novos livros que se alinhem com seus interesses e aumentar a diversidade de leitura.",
                tipo: "benefício"
            },
            {
                texto: "Pode criar uma bolha de recomendações, limitando a exposição a novos gêneros e autores diferentes.",
                tipo: "preocupação"
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
