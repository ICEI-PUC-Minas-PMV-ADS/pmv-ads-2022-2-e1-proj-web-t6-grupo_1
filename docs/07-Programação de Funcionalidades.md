# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência. 
Visualização de reclamações (RF-02, RF-07 e RF-09) 
  

<h4>Requisitos atendidos</h4>
<ul>
<li>RF02 -  O site deve permitir que todos os usuários vejam se outras  pessoas já denunciaram o mesmo problema ou outro na  mesma região.</li>
<li>RF07 - O site deve permitir que todos os usuários comentem em  denúncias abertas e visualizem a data que foi feita a  denúncia.</li>
<li>RF09 - O site deve permitir ao usuário avaliar a resolução do seu  problema.</li>
</ul>

<h4>Artefatos da funcionalidade </h4>
<ul>
<li>index.html </li>
<li>style.css </li>
<li>logo.jpg </li>
</ul>

<h4>Estrutura de Dados</h4>
<p>var db = {</p>
   <p> dados: [</p>
      <p>  {</p>
           <p> perfil: 'Geraldo Magela',</p>
           <p> titulo: 'Saúde - Falta de médicos',</p>
            <p>descricao: 'Bom dia Exemos Senhores, Venho por este meio humildemente falar do meu caso em relação a este problema. Eu me chamo Geraldo Magela sou logista, resido em Belo Horizon…',</p>
           <p> imagem:'https://s2.glbimg.com/YXmhCmZ5awKDsXwrHhUZDaB4hWc=/0x0:1024x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/Z/juBuIhSPyuRAgPq6astQ/whatsapp-image-2020-08-07-at-10.30.49.jpeg',
            categoria: 'zona-norte',</p>
       <p> }, </p>
       <p> {</p>
           <p> titulo: 'Escola Estadual Presidente Dutra',</p>
            <p>descricao: 'Bom dia Exmos Senhores, Venho por este meio humildemente falar do meu caso em relação a esta escola. Eu me chamo Dalva Parreiras sou manicure, resido em Belo Horizonte…',</p>
            <p>imagem: '[http://www.tce.mg.gov.br/ImagemDestaque/1111623737.jpg](http://www.tce.mg.gov.br/ImagemDestaque/1111623737.jpg)',
            categoria: 'zona-leste',</p>
      <p>  }</p>
   <p> ]</p>
<p>}</p>
 
 
<h4>Instruções de acesso</h4>
Abra um navegador de Internet e informe a seguinte URL: https://repl.it/Sf3l@#3ks  
A tela de notícias é a primeira funcionalidade exibida pelo aplicativo. 
 
 
Pesquisa de Notícias (RF-05) 
A tela de pesquisa permite ao usuário informar um texto que será pesquisado na base de notícias e retornar todas as notícias relacionadas com o texto informado pelo usuário. 

<h4>Artefatos da funcionalidade </h4>
<ul>
<li>index.html </li>
<li>style.css </li>
<li>logo.jpg </li>
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
