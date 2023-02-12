// constantes

const idMeta = document.querySelector("#id-meta");
const grupoMeta = document.querySelector("#grupo-meta");
const nomeMeta = document.querySelector("#nome-meta");
const quantItem = document.querySelector("#qtd-item");
const apelidoMetaConst = document.querySelector("#apelido");
const btnCadastrar = document.querySelector("#btn-cadastrar");

// funções 
function modalformulario() {
    var desaparecer = document.querySelector("#desaparecer");
    desaparecer.classList.toggle("desativar");

    var form = document.querySelector("#formulario");
    form.classList.toggle("desativar");
}

btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();

    // variaveis
    let grupo = grupoMeta;
    let nome = nomeMeta;
    let qItem = quantItem;
    let apelido = apelidoMetaConst;
    let contador = 1;

    // meta-conteudo
    let metas = document.querySelector(".metas");

    let metasConteudo = document.createElement("div");
    metasConteudo.classList.add("meta-conteudo");

    metas.appendChild(metasConteudo);

    //titulo-grupo
    let tituloGrupo = document.createElement("div")
    tituloGrupo.classList.add("titulo-grupo");

    tituloGrupoH1 = document.createElement("h1");
    tituloGrupoH1.innerText = grupo.value;

    tituloGrupo.appendChild(tituloGrupoH1);
    metasConteudo.appendChild(tituloGrupo);

    // titulo-nome
    let tituloNome = document.createElement("div");
    tituloNome.classList.add("titulo-nome");

    let tituloNomeP = document.createElement("p");
    tituloNomeP.innerText = nome.value;
    tituloNome.appendChild(tituloNomeP);

    metasConteudo.appendChild(tituloNome);


    // apelido
    let apelidoMeta = document.createElement("div");
    apelidoMeta.classList.add("apelido-meta");

    let apelidoP = document.createElement("p");
    apelidoP.innerText = `${apelido.value} ${contador}`;
    apelidoMeta.appendChild(apelidoP);
    contador++;

    let apelidoCaixas = document.createElement("div");
    apelidoCaixas.classList.add("caixas");

    for (let i = 1; i <= qItem.value; i++) {
        let caixa = document.createElement("div")
        caixa.classList.add("caixa");
        apelidoCaixas.appendChild(caixa);
    }

    apelidoMeta.appendChild(apelidoCaixas)
    metasConteudo.appendChild(apelidoMeta);



});

