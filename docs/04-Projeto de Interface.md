
# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## User Flow

Os diagramas apresentados nas Figuras a seguir mostras o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente Figma do projeto.

![IMG_6520](https://user-images.githubusercontent.com/94881508/194716104-bf137c86-d3fd-4879-9380-c732f80823b6.JPG)

![IMG_6521](https://user-images.githubusercontent.com/94881508/194716106-66e55038-bca6-487c-b3d3-dec63a22c1dc.JPG)

## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura a seguir. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
- **Cabeçalho** – local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
- **Conteúdo** – apresenta o conteúdo da tela em questão;
-	**Barra lateral** – apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.

![Imagem_1](https://user-images.githubusercontent.com/94881508/194716298-f1338945-0674-419e-b981-f73af784fec7.png)

### Tela - Home-Page

A tela de home-page mostra denuncias feitas no período que o usuário acessa o site na área de Conteúdo (imagem, título, data, ícone de compartilhamento e curtida). O bloco da Barra Lateral traz as denúncias em destaque da semana.
Dessa forma, com base na estrutura da Figura acima, na tag <header> estarão presentes os seguintes elementos:
-	Componente de pesquisa que irá transferir o usuário para uma nova página para facilitar a busca;
-	Componente de lista de categorias que dá acesso às páginas de cada uma das seções disponibilizadas como também a logo;
-	Botão para ser realizada denúncia;
-	Botão com a opção de fazer login ou, caso já esteja logado, exibe a foto do usuário.
 
 ![Sem título2](https://user-images.githubusercontent.com/94881508/194716399-796124b9-fdef-452b-ada3-2225fcb33abe.png)
 
 ![image](https://user-images.githubusercontent.com/94881508/194716425-6bee1c44-b638-4dfd-961a-19c397cad2d3.png)

### Tela - Reclamações
 
Na tela de reclamações, dentro da tag `<header>` estará presente a mesma estrutura da homepage, com exceção de que a barra de pesquisa ficará na `<nav>`.
 
A tag `<article>` também apresentará os mesmos elementos da home-page com a única diferença sendo as denúncias mostradas, que serão filtradas com base nos tópicos que o usuário já registrou queixa ou curtiu.
 
O bloco `<aside>` apresenta os mesmos elementos da Home-Page.

 ![image](https://user-images.githubusercontent.com/94881508/194716474-5b90cc37-4d1e-4043-9a8c-633cd4c8adfb.png)

### Tela – Resultado de Pesquisa
 
Assim que o usuário informa um tópico de pesquisa, ao clicar no botão OK, ele é direcionado para uma tela que traz a relação de denúncias associadas ao tópico informado. 
 
 ![image](https://user-images.githubusercontent.com/94881508/194716598-db7106f5-51c9-4f17-bc4b-e04a3dd15b18.png)

### Tela – Ranking
 
 Na `<header>`, a tela de ranking apresenta a mesma estrutura que a tela de reclamações. Diferente da home-page, a tela de ranking não apresenta o bloco `<aside>`. Ao contrário do modelo padrão, a página de ranking apresenta as denúncias mais feitas pelos usuários em geral usando também como filtragem o número de curtidas realizadas. Nesta tela, é apresentado também uma ferramenta que possibilita o filtramento de categorias como será mostrado nas imagens.
 
 ![image](https://user-images.githubusercontent.com/94881508/194716634-04cf9d6e-6b00-4764-a736-9c36956b872b.png)

 ![image](https://user-images.githubusercontent.com/94881508/194716643-0a3a97cb-d237-4668-a49f-5bc3f7db0df3.png)

### Tela - Fazer reclamação
 
 A tela que permite o preenchimento da queixa quando o usuário pressiona o ícone na parte lateral da `<header>` ou a opção na home-page.
 
 Nesta tela, serão dados espaços para que a queixa seja preenchida de forma efetiva. Em seguida deve confirmar ou cancelar o envio da queixa dando também a possibilidade da mesma ser preenchida de forma anônima. Na sequência, a tela é fechada retornando ao ambiente anterior.
 
 ![image](https://user-images.githubusercontent.com/94881508/194716744-69046149-a9ef-440f-9ca8-5b5f38bee14c.png)

### Tela – Login

Esta tela permite que o usuário realize o login quando não conectado previamente. Esta tela é exibida na forma de uma janela modal (surge sobre outras janelas). Em seguida, deve-se escolher de que forma se deseja iniciar a sessão. São dadas duas opções, o usuário pode prosseguir utilizando o Google ou utilizar e-mail e senha. A tela é fechada voltando para o ambiente anterior assim que o login for concluído.
 
 ![image](https://user-images.githubusercontent.com/94881508/194716715-dd751588-ef9a-4e29-a205-6b15757baf52.png)

