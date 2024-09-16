var racoes = [
    {
        tipo:"seca",
        nome: "Birbo Carne",
        imagem: "./assets/racoes/carne.png",
        valor: 28,
        descricao: "Com 8% de proteína, sabor carne."
    },
    {
        tipo:"seca",
        nome: "Birbo Frango",
        imagem: "./assets/racoes/frango.png",
        valor: 30,
        descricao: "Com 10% de proteína, sabor frango."
    },
    {
        tipo:"seca",
        nome: "Birbo Legumes",
        imagem: "./assets/racoes/legumes.png",
        valor: 25,
        descricao: "Com 20% de proteína, sabor legumes."
    },
    {
        tipo:"molhada",
        nome: "Birbo Peixe",
        imagem: "./assets/racoes/carneMol.png",
        valor: 28,
        descricao: "Com 8% de proteína, sabor peixe."
    },
    {
        tipo:"molhada",
        nome: "Birbo Cenoura",
        imagem: "./assets/racoes/frangoMol.png",
        valor: 30,
        descricao: "Com 10% de proteína, sabor cenoura."
    },
    {
        tipo:"molhada",
        nome: "Birbo Mix de Carnes",
        imagem: "./assets/racoes/mixMol.png",
        valor: 25,
        descricao: "Com 20% de proteína, carne de porco, frango."
    }

]

function listarProdutos(listaRacoes, validador) {
    let ol = document.getElementById("listaRacoes");
    listaRacoes.forEach(racao => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        if(validador){
            img.src = racao.imagem;
        } else {
            img.src = `.${racao.imagem}`
        }
        
        const nome = document.createElement("p");
        nome.innerHTML= racao.nome;
        const valor = document.createElement("p");
        valor.innerHTML = `R$${racao.valor}`;
        const descricao = document.createElement("p");
        descricao.innerHTML= racao.descricao;
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(valor);
        li.appendChild(descricao);
        li.classList.add("cardItem");
        ol.appendChild(li);
    });
}
function verificaPagina(listaRacoes){
    let ol = document.getElementById("listaRacoes");
    ol.innerHTML="";
    let login = document.getElementById("login");
    if(login != undefined) {
        listarProdutos(listaRacoes, true);
    } else {
        listarProdutos(listaRacoes, false);
    }
}

function filtraRacao(filtro) {
    let ol = document.getElementById("listaRacoes");
    ol.innerHTML="";
    var listaFiltrada = racoes.filter((racao)=> racao.tipo == filtro);
    verificaPagina(listaFiltrada);
}

function exibeTodasRacoes () {
    verificaPagina(racoes);
}

verificaPagina(racoes);