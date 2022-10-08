# Especificações do Projeto

  Nesse projeto temos como principal objetivo ajudar os Belorizontinos e frequentadores a terem um local seguro e confiável apara relatar os problemas que encontram na cidade e coma a certeza de que os seus relatos serão levados aos responsáveis. 

## Personas

|Dados pessoais|Ocupações           |Frustações                    |Histórias
|--------------|--------------------|------------------------------|---------------------------------------------
| Dilma Célia, 49 anos  | Médica, dona de uma loja de roupas.   | Falta de recursos necessário para ajudar. | Dilma diz que enfrenta dificuldades para ajudar as pessoas por não ter recurso o suficiente na UPA que trabalha. |
| Alexandre Portes, 23 anos | Motorista de aplicativo | Como trabalha o dia todo nas ruas de Belo Horizonte, consegue ver várias inconsistências nas ruas. | Alexandre diz que enfrenta dificuldades no seu trabalho trabalho por ter, por exemplo, muitos buracos nas ruas, e assim ter o risco de se acidentar. |
|Dalva Parreiras, 30 anos | Manicure | Observa a falta de professores e materiais didáticos nas escolas. | Dalva diz que percebe que seus filhos muitas vezes não têmaula na escola por falta de recursos.
|  Geraldo Magela,  60 anos | Lojista | Observa a falta de médicos nos locais de atendimento. | Geraldo disse que a maior parte das vezes que procura um atendimento em hospitais públicos percebe a falta de médicos lá.



## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/DESEJO ... O QUE |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Dilma Célia | denunciar a falta de medicamentos e ferramentas necessárias para poder trabalhar | poder assim ajudar ainda mais as pessoas.|
| Alexandre Portes | cobrar que os problemas de infraestrutura viária sejam resolvidos | poder trabalhar como motorista de app sem se preocupar se o carro vai ter algum problema por causa de, por exemplo, buracos. |
|Dalva Parreiras | denunciar a falta de professores e de materiais didáticos | proporcionar aos estudantes uma melhor qualidade de ensino. |
|Geraldo Magela | exigir profissionais da saúde nos locais de atendimento. | conseguir ter um atendimento rápido e de qualidade. |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.
|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve permitir que o usuário selecione a categoria e a subcategoria do problema que deseja denunciar. | ALTA | 
|RF-02| O site deve permitir que todos os usuários vejam se outras pessoas já denunciaram o mesmo problema ou outro na mesma região. |Média |
|RF-03| O site deve levar os problemas denunciados para os órgãos responsáveis. | Alta |
|RF-04| O site deve mostrar ao usuário um mapa que ele consiga ver o local que ele está e todos os problemas. | Média |
|RF-05| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma denúncia por ID do chamado ou por endereço.| Alta |
|RF-06| O site deve permitir visualizar as informações do perfil dos usuários. | Baixa |
|RF-07| O site deve permitir que todos os usuários comentem em denúncias abertas e visualizem a data que foi feita a denúncia. | Alta |
|RF-08| O site deve permitir que os usuários façam denúncias anônimas. | Alta |
|RF-09| O site deve permitir ao usuário avaliar a resolução do seu problema. | Baixa |
|RF-10| O site deve destacar a resposta do órgão responsável | Alta | 
|RF-11| O site deve permitir o compartilhamento das denúncias nas redes sociais.| Média |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
