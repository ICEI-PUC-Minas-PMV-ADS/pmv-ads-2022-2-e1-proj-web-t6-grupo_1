# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência. 
Visualização de reclamações (RF-02, RF-07 e RF-09) 
A tela principal do sistema apresenta apresenta notícias de destaque nos principais canais, as notícias são armazenadas no LocalStorage com estruturas de dados baseada em JSON. Um exemplo da tela é apresentado na Figura X.  

<h4>Requisitos atendidos</h4>
<ul>
<li>RF02 -  O site deve permitir que todos os usuários vejam se outras  pessoas já denunciaram o mesmo problema ou outro na  mesma região.</li>
<li>RF07 - O site deve permitir que todos os usuários comentem em  denúncias abertas e visualizem a data que foi feita a  denúncia.</li>
<li>RF09 - O site deve permitir ao usuário avaliar a resolução do seu  problema.</li>
</ul>

<h4>Artefatos da funcionalidade </h4>
<ul>
<li href=" ">index.html </li>
<li href=" ">style.css </li>
<li href=" ">logo.jpg </li>
</ul>

<h4>Estrutura de Dados</h4>
{ 
"mensagens": [ 
{ 
"id": 1, 
"titulo": "Trump estende ordem que proíbe Huawei", 
"data": "14/05/2020", 
"fonte": "Universo Online", 
"autor": "Sam Rutherford", 
"texto": "Em maio de 2019, o presidente dos Estados 
                  	Unidos, Donald Trump, emitiu uma ordem executiva 
                   	que proibiu várias empresas estrangeiras ..." 
} 
] 
} 
 
 
<h4>Instruções de acesso</h4>
Abra um navegador de Internet e informe a seguinte URL: https://repl.it/Sf3l@#3ks  
A tela de notícias é a primeira funcionalidade exibida pelo aplicativo. 
 
 
Pesquisa de Notícias (RF-05) 
A tela de pesquisa permite ao usuário informar um texto que será pesquisado na base de notícias e retornar todas as notícias relacionadas com o texto informado pelo usuário. 

<h4>Artefatos da funcionalidade </h4>
<ul>
<li>index.html </li>
<li>style.css </li>
<li>icone_lupa.jpg </li>
</ul>
 
Instruções de acesso 
Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
Descompacte o arquivo em uma pasta específica; 
Abra o Visual Studio Code e execute on Live Server; 
Abra um navegador de Internet e informe a seguinte URL: 
http://localhost:5500/index.html  


Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
