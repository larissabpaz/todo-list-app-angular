# Todo List Project in Angular

## Descrição geral

O front-end deste projeto é uma aplicação de gerenciamento de tarefas desenvolvida em Angular, utilizando a linguagem TypeScript. A interface é responsiva e intuitiva, permitindo que os usuários interajam facilmente com a aplicação.

## Funcionalidades Principais

Gerenciamento de Tarefas: Os usuários podem criar, editar, atualizar e excluir tarefas.
Filtro de Tarefas: Possibilidade de filtrar tarefas por prioridade ou categoria, ao digitar na barra de pesquisa.
Modal para Criação/Edição: A utilização de modais facilita a criação e edição de tarefas, melhorando a experiência do usuário.
Integração com API: O front-end está integrado a uma API construída em ASP.NET Core, permitindo a comunicação e o gerenciamento de dados de tarefas.

## Estrutura do Projeto
A aplicação é organizada em componentes reutilizáveis, otimizando a manutenção e escalabilidade do código. As dependências são gerenciadas pelo npm e podem ser instaladas na raiz do projeto.

## Instalação

Para configurar o projeto localmente, siga as etapas abaixo:

Clone o repositório:

git clone [Repository Front End](https://github.com/larissabpaz/todo-list-app-angular)

Instale as dependências:

npm install Inicie o servidor: Antes de rodar o aplicativo, certifique-se de que o servidor de backend está rodando. Para isso, execute:

## Execução
Para executar a aplicação, utilize o comando `ng serve` na raiz do projeto. A aplicação estará acessível em http://localhost:4200.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10. 

Para executar a aplicação e configurar um proxy para redirecionar requisições de API durante o desenvolvimento, utilize o comando `ng serve --proxy-config proxy.conf.json`. O repositório referente a API é este: [Repository Back End](https://github.com/larissabpaz/TodoAngularApi).
