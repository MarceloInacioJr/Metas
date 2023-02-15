// constantes

const idMeta = document.querySelector("#id-meta");
const grupoMeta = document.querySelector("#grupo-meta");
const nomeMeta = document.querySelector("#nome-meta");
const quantItem = document.querySelector("#qtd-item");
const apelidoMetaConst = document.querySelector("#apelido");
const btnAddTarefa = document.querySelector("#add-tarefa");
const btnCadastrar = document.querySelector("#btn-cadastrar");
let contador = 1;

// funções 

function apelidocontador() {
    return contador++;
}


// modal
function modalformulario() {
    var desaparecer = document.querySelector("#desaparecer");
    desaparecer.classList.toggle("desativar");

    var form = document.querySelector("#formulario");
    form.classList.toggle("desativar");
}


//função para adicionar tarefas
btnAddTarefa.addEventListener("click", (e) => {
    e.preventDefault();
     
    let contador = apelidocontador();
    
    if(contador >= 5){
        btnAddTarefa.disabled = true;
    }
    else {
    
    console.log("contador", contador)
    let formularioAddTarefas = document.querySelector(".form-add-tarefa");
    
    
    let inputQItem = document.createElement("input");
    inputQItem.setAttribute("type","number");
    inputQItem.classList.add("qtd-item")
    inputQItem.setAttribute("min", "1");
    inputQItem.setAttribute("max", "10");
    inputQItem.setAttribute("name", "qtd-item");
    inputQItem.setAttribute("id", "qtd-item");
    inputQItem.setAttribute("placeholder", "Quant. caixas")
    formularioAddTarefas.appendChild(inputQItem);

    let inputApelido =  document.createElement("input");
    inputApelido.setAttribute("type", "text");
    inputApelido.setAttribute("name", "apelido");
    inputApelido.setAttribute("id", "apelido");
    inputApelido.setAttribute("placeholder", "Apelido");

    formularioAddTarefas.appendChild(inputApelido);
   
    }
})


// funcão para criar as metas
btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();

    // variaveis
    let grupo = grupoMeta;
    let nome = nomeMeta;
    let qItem = quantItem;
    let apelido = apelidoMetaConst;
    

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

    let caixaContent = document.createElement("div");
    caixaContent.classList.add("caixa-content"); 
    
    let contador = apelidocontador();
    for(let i = 1; i <= contador; i++){
    console.log("feito")

    let apelidoMeta = document.createElement("div");
    apelidoMeta.classList.add("apelido-meta");
    caixaContent.appendChild(apelidoMeta);

    let elementoApelido =  document.createElement("p");
    elementoApelido.classList.add("elemento-apelido");
    elementoApelido.innerText = apelido.value;    
    apelidoMeta.appendChild(elementoApelido);

    let caixas = document.createElement("div")
    caixas.classList.add("caixas");
    apelidoMeta.appendChild(caixas);


    for(let i = 1; i <= qItem.value ; i++){
    let caixa = document.createElement("div");
    caixa.classList.add("caixa");
    caixas.appendChild(caixa);
    metasConteudo.appendChild(caixaContent);

    }
}
     
});

