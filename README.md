# App Financeiro

## Descrição

O App Financeiro é um aplicativo desenvolvido em React Native utilizando o Expo, com o objetivo de ajudar os usuários a gerenciar suas finanças pessoais. O aplicativo permite visualizar o saldo atual, ganhos, despesas, além de fornecer uma seção de notícias sobre a bolsa de valores e informações do usuário.

## Funcionalidades

- **Página Inicial**: Exibe o saldo atual, uma lista das últimas transações (ganhos e despesas) e botões para acessar outras funcionalidades.
- **Felicidades**: Página que exibe os ganhos do usuário.
- **Tristezas**: Página que exibe as despesas do usuário.
- **Usuário**: Página com informações do usuário, como CPF, número de celular, e-mail e nome.
- **Notícias**: Página que exibe notícias fictícias sobre a bolsa de valores.

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **React Navigation**

## Instalação

Para rodar o projeto localmente, siga os seguintes passos:

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/EloyWayne/AppFinanceiro.git
   cd AppFinanceiro

2. **Instale as dependências:**
   
  npm install

3. **Inicie o servidor do Expo:**

    expo start

4. **Execute no emulador ou dispositivo físico:**

    Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o código QR fornecido no terminal.

5. **Estrutura do Projeto:**

App.js: Ponto de entrada do aplicativo. Configura a navegação entre as páginas.

src/pages: Contém as páginas do aplicativo (Home, Felicidades, Tristezas, Usuario, Noticias).

src/components: Contém componentes reutilizáveis (Header, Balance, Movements, Actions).
