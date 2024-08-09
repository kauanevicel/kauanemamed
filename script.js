const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em um mercado e encontra uma nova marca de linguiça toscana. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso parece delicioso!",
                afirmacao: "Ficou animado para experimentar a nova linguiça toscana e começou a pensar em diferentes receitas para usá-la."
            },
            {
                texto: "Isso parece arriscado!",
                afirmacao: "Sentiu receio de experimentar algo novo e decidiu que precisaria de mais informações sobre a marca antes de comprar."
            }
        ]
    },
    {
        enunciado: "Você decide preparar um prato especial com a linguiça toscana e precisa escrever uma receita. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Utiliza uma receita tradicional que encontrou na internet e adapta os ingredientes para incluir a linguiça toscana.",
                afirmacao: "Conseguiu adaptar uma receita clássica para destacar a linguiça toscana, proporcionando uma refeição deliciosa e personalizada."
            },
            {
                texto: "Cria uma receita original com base em suas próprias ideias e no que você acha que combina bem com a linguiça toscana.",
                afirmacao: "Optou por usar sua criatividade para desenvolver uma receita nova, o que trouxe um toque pessoal e inovador ao prato."
            }
        ]
    },
    {
        enunciado: "Durante um jantar com amigos, você discute o impacto das novas marcas de linguiça toscana no mercado. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a diversidade de marcas e sabores é ótima, pois permite que os consumidores escolham produtos que atendam ao seu gosto.",
                afirmacao: "Vê a variedade no mercado como uma oportunidade para explorar diferentes sabores e enriquecer a culinária."
            },
            {
                texto: "Preocupo-me com a qualidade das novas marcas e prefiro apoiar marcas tradicionais que têm um histórico comprovado.",
                afirmacao: "Sua preocupação com a qualidade motivou você a pesquisar mais sobre a origem e o processo de fabricação das linguiças toscanas."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um banner para uma feira gastronômica destacando a linguiça toscana. Como você faz isso?",
        alternativas: [
            {
                texto: "Desenvolve o banner usando um software de design gráfico para criar um visual atraente e informativo.",
                afirmacao: "Utilizou suas habilidades de design para criar um banner que chamasse a atenção e promovesse a linguiça toscana de forma eficaz."
            },
            {
                texto: "Usa um gerador de imagens baseado em IA para criar gráficos e elementos visuais para o banner.",
                afirmacao: "Aproveitou a tecnologia para criar rapidamente um banner visualmente interessante, e agora está aprendendo a usar essas ferramentas de forma ainda mais eficaz."
            }
        ]
    },
    {
        enunciado: "Seu grupo está preparando um evento de degustação de linguiça toscana, mas um dos membros usou uma receita gerada por IA para o prato. O resultado parece bastante genérico. O que você faz?",
        alternativas: [
            {
                texto: "Aceita a receita gerada pela IA e a utiliza como está, pois considera que a tecnologia pode ser uma boa base para criar pratos.",
                afirmacao: "Percebeu que depender apenas de receitas geradas por IA pode resultar em algo menos pessoal e decidiu buscar um equilíbrio entre tecnologia e criatividade."
            },
            {
                texto: "Revê a receita gerada pela IA e ajusta os ingredientes e o preparo com base em suas próprias preferências e experiência.",
                afirmacao: "Reconheceu que a IA pode ser uma ferramenta útil, mas que a personalização e o toque pessoal são essenciais para criar uma experiência gastronômica única."
            }
        ]
    },
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
