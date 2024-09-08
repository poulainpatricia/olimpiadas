/**
 * Função para pesquisar atletas e exibir os resultados.
 *
 * Itera sobre o array de atletas e cria elementos HTML para cada atleta encontrado.
 * Insere os elementos HTML na seção com o ID "resultados-pesquisa".
 */
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    const resultadosSection = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    if(!campoPesquisa){
        resultadosSection.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o seu critério de busca.</p>"
        return
    }

    
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa a string que armazenará os resultados
    let resultadosHTML = "";

    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada atleta no array de dados
    for (const atleta of atletas) {

        titulo = atleta.titulo.toLowerCase();
        descricao = atleta.descricao.toLowerCase();
        tags = atleta.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultadosHTML += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${atleta.titulo}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${atleta.descricao}
                    </p>
                    <a href=${atleta.link} target="_blank">${atleta.titulo} Wikipédia</a>
                </div>
            `;
         }
    }

    if(!resultadosHTML){
        resultadosHTML = "<p>Nada foi encontrado</p>";
    }

    resultadosSection.innerHTML = resultadosHTML;        

}
