# 📜 Contratos
![Badge Status](https://img.shields.io/badge/status-em%20desenvolvimento-%2360C25E)

## Descrição do projeto
Este projeto utiliza a API do Spotify para buscar nome de cantores e bandas e realizar a contratação. Trata-se de uma simulação, e minha experiência não permite algo mais trabalhado, portanto, existem bastante problemas nele por enquanto. Mas serão corrigidas conforme eu for adquirindo xp. Outro ponto foi a utilização de Vue.js. Nunca tinha visto. Apenas ouvido falar, e pouco inclusive. Sendo assim, este projeto está ainda muito longe do que desejo alcançar. Mas até o momento, é o que eu consegui fazer.

*******

Vídeo do projeto:



https://github.com/Maciel47/contratos/assets/66790565/8ea8b3e8-2eb7-4543-ab89-2b05b4e457c2



Caso você queira utiliza-lo em sua máquina, é importante que você saiba de algumas coisas. Portanto, segue o "tutorial":

## Passos:
 1. [API do Spotify | Como funciona? Como utilizar neste projeto.](#apiuse)
 2. [Postman | A utilização neste projeto.](#getinfoapi)
 3. [Rodando o projeto](#rundev)

*******

<div id='apiuse'/> 
  
## API do Spotify | Como funciona? Como utilizar neste projeto.
Primeiro acesse: https://developer.spotify.com/documentation/web-api/tutorials/getting-started 

Nesta página, acesse sua conta, ou crie uma. Feito isso, você vai criar um app, colocando apenas as informações básicas. Um detalhe importante, se você não tem experiência para automatizar o processo, no campo "Redirect URIs" coloque a do Postman. Se você não sabe onde encontrar a URI, na seção: Postman | A utilização neste projeto. você encontra. De qualquer forma, pode avançar na criação, pois depois é possível adicionar essa redirect uri.

Ao criar o app, você vai acessar, em sua conta: Dashboard > Seu app > Settings. Aqui, você precisa de duas informações: Client ID e Client Secret (obs: Para visualizar o client secret, basta clicar no link abaixo do client id). Feito isso, agora vamos para o Postman.

Obs: Existem duas formas de adquirir o token. No caso, por falta de experiência fiz dessa maneira. Mas o correto é construir dentro do app e esse processo rodar de forma automática. Também é possível que outras pessoas acessem o seu app, mas é necessário algumas credenciais. Não fui afundo nesta situação. Mas pretendo implementar futuramente.
*******

<div id='getinfoapi'/> 
  
## Postman | A utilização neste projeto.
Eu utilizei o Postman do VSCode, mas você pode utilizar a plataforma que for melhor. Como eu utilizei o postman, os passos a seguir serão relativo ao postman. Caso você utilize outro, não sei como deverá ser feito.

No postman, você vai acessar a aba "Authorization" e selecione o type: OAuth 2.0. Feito isso, localize a área: "Configure New Token". Aqui, você vai preencher e/ou selecionar os campos da seguinte forma:

Grant Type: Authorization Code (Acredito que já vem selecionado este mesmo);

Callback URL: Lembra da "Redirect URIs"? É essa que você vai copiar e colocar em seu app dentro do Spotify. (Aqui não é possível alterar. Apenas copie e cole no Spotify);

Auth URL: https://accounts.spotify.com/authorize;

Access Token URL: https://accounts.spotify.com/api/token;

Client ID: Cole aqui o do Spotify;

Client Secret: Cole aqui o do Spotify;

Scope e State podem ficar vazio;

Client Authentication: Send as Basic Auth header (Acredito que seja o padrão. Pode deixar).

Agora, basta clicar em "Generate Access Token" e aguardar. Caso apareça modal solicitando que aceite, confirme que se trata deste processo, e aceite. Aqui, o que vai acontecer é, vai ser feito o login na sua conta e será solicitada a sua autorização (que é através de um botão apenas) para gerar o token. Autorizando, o token será enviado para o Postman, onde você vai encontrar na mesmo página, próximo dos campos citados anteriormente. Copie este token e coloque no arquivo "token.js" que deverá ser criado dentro da pasta service do projeto. Este token vence a cada uma hora, porém, para gerar um novo basta clicar "refresh" abaixo do token no postman. Para facilitar o processo, crie um request Get, nomeie ele de maneira que você saiba que se trata deste token e quando precisar, basta utilizar o refresh. 

Obs: Para melhorar a segurança, você pode salvar o client id e client secret em variáveis. 

*******

<div id='rundev'/>

## Rodando o projeto

Clone o projeto em uma pasta de sua escolha. Abra no terminal e rode: 

```sh
npm install
```

Feito isso, você vai instalar os pacotes, deixando configurado. Próximo passo, crie um arquivo chamado "token.js" na pasta /src/services.

Neste arquivo, crie o seguinte código:

```javascript
const token = 'seu-token'

export default token;
```

Substitua seu-token pelo token que foi gerado no postman que estará tudo pronto.

Para rodar o projeto:

```sh
npm run dev
```

Agora é só rodar, testar, quebrar e melhorar.
