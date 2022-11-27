let btnFiltrar = document.getElementById("btnFiltrar");
/*renderizar com banco completo*/
renderizarConteudo(db);
/*
 * Retonar vetor com os elementos filtrados
 * 
*/
function filtrarItens(search) {
  let filteredData = db.dados.filter(el => el.titulo.toLowerCase().includes(search.toLowerCase())
    || el.descricao.toLowerCase().includes(search.toLowerCase())
    || el.perfil.toLowerCase().includes(search.toLowerCase())
  );
    
  return { dados: filteredData };
}
/*
* Exibe dados em tela.
*/
function renderizarConteudo(dbFiltrado) {
    var prods = '';
    for (let i=0; i < dbFiltrado.dados.length; i++) {
        prods += `<div class="row">
              <div class="col-md-12">
                <div class="activity-feed-post mb-4">
                  <article id="activity-feed-1558809" data-timestamp="1666740840" data-complaint-id="f458108b-5b6e-4262-b8d4-518997ef25c5" class="post complaint">
      <div class="activity-feed-post-header d-flex">
        <div>
      <a href="${ dbFiltrado.dados[i].linkreclam }" title="${ dbFiltrado.dados[i].titulo }" class="activity-feed-post-header-avatar"><img class="rounded-circle" src="${ dbFiltrado.dados[i].imagem }"></a>
      </div>
    <div class="activity-feed-post-header-data mr-auto pr-2">
      <div class="activity-feed-post-header-data-username"><a href="${ dbFiltrado.dados[i].linkreclam }" class="actor" title="${ dbFiltrado.dados[i].titulo }">${ dbFiltrado.dados[i].titulo }</a> recebeu uma reclamação de <a Class="actor" href="${db.dados[i].linkuser}" title="Ver perfil de ${ db.dados[i].perfil }">${ db.dados[i].perfil }</a></div>
      <div class="activity-feed-post-header-data-date">há 4 minutos </div>
    </div>	</div>
      <div class="d-flex activity-feed-post-status">
        <div class="d-block d-sm-inline badge badge-warning badge-pill">Aguarda resposta</div>		<span class="d-block d-sm-inline">${ dbFiltrado.dados[i].zona }</span>
      </div>
        <div class="activity-feed-post-body">
        <div class="row">
          <div class="col-md-4 d-none d-md-block">
            <a href="${ dbFiltrado.dados[i].linkreclam }" title=""><img class="img-fluid img-thumbnail" src="${ dbFiltrado.dados[i].imagem }" alt="${ dbFiltrado.dados[i].titulo }"></a>
          </div>
          <div class="col-md-8">
            <h3><a href="${ dbFiltrado.dados[i].linkreclam }" title="${ dbFiltrado.dados[i].titulo }">${ dbFiltrado.dados[i].titulo }</a></h3>
            <p>${ dbFiltrado.dados[i].descricao.substring(0,180)} <a href="${ dbFiltrado.dados[i].linkreclam }" title="${ dbFiltrado.dados[i].titulo }">...ler reclamação</a></p>
          </div>
        </div>
      </div>
      <div class="activity-feed-post-footer d-flex">
      <div class="mr-auto">
        <a title="Comentar" class="comment" href="${dbFiltrado.dados[i].linkreclam}#comments"><i class="far fa-comment"></i> Comentar</a>
      </div>
      <div><a title="Comentar" href="${dbFiltrado.dados[i].linkreclam}#comments">${ dbFiltrado.dados[i].comentario} comentários</a></div>
    </div>
    <div class="activity-feed-post-comment-list d-none">
      </div>
    </article></div></div></div>					<div class="row">
                <div class="col-md-12">
                  <div class="mb-4">
                    <div class="adx-module ia-home_feed"></div>							</div>
                </div>
              </div>
            </div> `;
    }
    document.getElementById('content').innerHTML = prods;
}

btnFiltrar.addEventListener("click", function () {
  // recupera o termo digitado
  let termo = document.getElementById("search").value;
  // filtro o termo na base de dados
  let dados = filtrarItens(termo);
  // exibe os resultados encontrados
  renderizarConteudo(dados);
});
