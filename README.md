# 📜 Contratos
![Badge Status](https://img.shields.io/badge/status-em%20desenvolvimento-%2360C25E)

## Descrição do projeto
Este projeto utiliza a API do Spotify para buscar nome de cantores e bandas e realizar a contratação. Trata-se de uma simulação, e minha experiência não permite algo mais trabalhado, portanto, existem bastante problemas nele por enquanto. Mas serão corrigidas conforme eu ir adquirindo xp. Outro ponto foi a utilização de Vue.js. Nunca tinha visto. Apenas ouvido falar, e pouco inclusive. Sendo assim, este projeto está ainda muito longe do que desejo alcançar. Mas até o momento, é o que eu consegui fazer. Gostei bastante de fazer, pois além de desafiador, aprendi demais. 

*******

Vídeo do projeto:



https://github.com/Maciel47/contratos/assets/66790565/8ea8b3e8-2eb7-4543-ab89-2b05b4e457c2



Caso você queira utilizar este projeto em sua máquina, basta seguir estes passos: 

## Passos para utilizar este projeto em sua máquina: 
 1. [API do Spotify | Como funciona? Como utilizar neste projeto.](#apiuse)
 2. [Rodando o projeto](#rundev)
 3. [Limpando o localStorage](#afteruse)
 4. [Dica: Gerando token com o Postman](#littletip)
 


 *******

<div id='apiuse'/> 
  
## API do Spotify | Como funciona? Como utilizar neste projeto.
Primeiro acesse (para abrir em uma nova guia: Crtl + clique botão esquerdo do mouse): https://developer.spotify.com/documentation/web-api/tutorials/getting-started 

Nesta página, acesse sua conta, ou crie uma. Feito isso, você vai criar um app, colocando apenas as informações básicas. Um detalhe importante, se você não tem experiência para automatizar o processo, no campo "Redirect URIs" coloque a que você utiliza em seu projeto com a adição do '/callback'. Exemplo: http://localhost:5000/callback. 

Ao criar o app, você vai acessar, em sua conta: Dashboard > Seu app > Settings. Aqui, você precisa de duas informações: Client ID e Client Secret (obs: Para visualizar o client secret, basta clicar no link abaixo do client id). Feito isso, você precisa colocar estas duas informações no projeto. Na próxima seção, irei te explicar.

Obs: Existem duas formas de adquirir o token. Você pode utilizar a forma como está neste projeto, ou pode utilizar o Postman (ou qualquer outro software que lide com API).


*******

<div id='rundev'/>

## Rodando o projeto

Clone o projeto em uma pasta de sua escolha. Lembra do Client ID e Client Secret? Você vai colocar essa informações no respectivo caminho: '../src/services/clientServices.js'. Ao acessar, você irá notar que já está preparado. Basta colocar as informações. Feito isso, o restante vai de forma autônoma.
Neste caso, quando for o primeiro acesso, será solicitado a autorização (basta clicar no botão da página) e tudo pronto. Você poderá utilizar.  


O próximo passo é abrir o terminal e rodar: 

```sh
npm install
```

Feito isso, você vai instalar os pacotes, deixando configurado.

Para rodar o projeto:

```sh
npm run dev
```

Agora é só rodar, testar, estudar, quebrar, melhorar. Aproveite.

<div id='afteruse'/> 

## Limpando o localStorage
Este projeto utiliza o armazenamento do navegador (localStorage) por conta disso, ao concluir a utilização, não se esqueça de limpar o seu. 

Eu utilizo o navegador Edge, e irei te explicar como fazer nele. Caso utilize outro, basta pesquisar que você consegue encontrar realizar a limpeza. 

Para limpar no Edge, acesse a debugger tool (ctrl + shift + i), localize a aba Aplicativo (se não encontrar, clique no '+' que é possível estar nesta listagem). Feito isso, você irá encontar Armazenamento, e então você poderá ver o seu "localhost" ali. Clicando nele, você terá as colunas: Chave e Valor. Abaixo, estarão as informações. Basta clicar com o botão direito do mouse, e selecionar a opção Excluir. Faça isso tanto para hirerInfo quanto hirerAddress. E estará tudo certo e limpo. Lembrando que, você só irá armazenar informação ao concluir os "dois" formulários, sendo o de contrato e endereço. Caso você não tenha preenchido e continuado, seu localStorage ainda não terá armazenado estas informações.  

*******

<div id='littletip'/> 
  
## Dica: Gerando token com o Postman.
Inicialmente, eu não tinha o processo rodando no próprio software, portanto utilizei Postman e como aprendi a utilizar, vou explicar o funcionamento caso você opte por utilizar ou queira testar como funciona. Eu utilizei a extensão do VSCode, mas você pode utilizar a plataforma que for melhor. Como eu utilizei o postman, os passos a seguir serão relativo a ele. Caso você utilize outro, será necessário que você busque o funcionamento dele.

No postman, você vai acessar a aba "Authorization" e selecionar o type: OAuth 2.0. Feito isso, localize a área: "Configure New Token". Aqui, você vai preencher e/ou selecionar os campos da seguinte forma:

Grant Type: Authorization Code (Acredito que já vem selecionado este mesmo);

Callback URL: Lembra da "Redirect URIs" que foi citada na API do Spotify? Utilizando o Postman, é essa que você vai copiar e colocar em seu app dentro do Spotify. (Aqui não é possível alterar. Apenas copie e cole no Spotify);

Auth URL: https://accounts.spotify.com/authorize;

Access Token URL: https://accounts.spotify.com/api/token;

Client ID: Cole aqui o do Spotify;

Client Secret: Cole aqui o do Spotify;

Scope e State podem ficar vazio;

Client Authentication: Send as Basic Auth header (Acredito que seja o padrão. Pode deixar).

Agora, basta clicar em "Generate Access Token" e aguardar. Caso apareça modal solicitando que aceite, confirme que se trata deste processo, e aceite. Neste processo é feito o login na sua conta e será solicitada a sua autorização (que é através de um botão apenas) para gerar o token. Autorizando, o token será enviado para o Postman, onde você vai encontrar na mesma página, próximo dos campos citados anteriormente. Copie este token e coloque no arquivo "token.js" que deverá ser criado dentro da pasta service do projeto. Este token vence a cada uma hora, porém, para gerar um novo basta clicar "refresh" abaixo do token no postman. Para facilitar o processo, crie um request Get, nomeie ele de maneira que você saiba que se trata deste token e quando precisar, basta utilizar o refresh. 

Obs: Para melhorar a segurança, você pode salvar o client id e client secret em variáveis. 
