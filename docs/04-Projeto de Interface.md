
# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## User Flow

Os diagramas apresentados nas Figuras 2 e 3 mostras o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente Figma do projeto.

![IMG_6520](https://user-images.githubusercontent.com/94881508/194716104-bf137c86-d3fd-4879-9380-c732f80823b6.JPG)

![IMG_6521](https://user-images.githubusercontent.com/94881508/194716106-66e55038-bca6-487c-b3d3-dec63a22c1dc.JPG)

## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura 4. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
- **Cabeçalho** – local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
- **Conteúdo** – apresenta o conteúdo da tela em questão;
-	**Barra lateral** – apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.

![Imagem_1](https://user-images.githubusercontent.com/94881508/194716298-f1338945-0674-419e-b981-f73af784fec7.png)

### Tela - Home-Page

A tela de home-page mostra denuncias feitas no período que o usuário acessa o site na área de Conteúdo (imagem, título, data, ícone de compartilhamento e curtida). O bloco da Barra Lateral traz as denúncias em destaque da semana.
Dessa forma, com base na estrutura da Figura 4, na tag <header> estarão presentes os seguintes elementos:
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
