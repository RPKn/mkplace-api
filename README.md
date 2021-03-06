# Desafio de programação da MKPlace

#### Esse repositório contém uma API para o desafio do processo seletivo para Desenvolvedor BACKEND.

Esse projeto foi desenvolvido em um ambiente com acesso ao MongoDB na porta 27017 sem auth usando Docker com a imagem oficial MongoDB(latest) e testes de acesso usando Robo 3T.

A versão do Node utilizada foi v16.14.0 e o ambiente de desenvolvimento foi o VsCode.

As dependências para executar o projeto seguem listadas abaixo (do arquivo package.json):
```
pacotes:
"body-parser": "^1.19.1",
"express": "^4.17.2",
"http-status": "^1.5.0",
"mongoose": "^6.2.1",
"slugify": "^1.6.5",
"ts-node": "^10.5.0",
"typescript": "^4.5.5"

@types:
"@types/body-parser": "^1.19.2",
"@types/express": "^4.17.13",
"@types/http-status": "^1.1.2",
"@types/node": "^17.0.17"
```

Utilize o comando `npm install` para instalar os pacotes e @types necessários antes de executar o projeto.

Feito isso, execute o comando `npm run compile` para compilar o projeto e criar os diretórios e arquivos necessários. 

Aguarde até o comando terminar e a mensagem `Found 0 errors. Watching for file changes.` aparecer, então cancele o comando com CTRL+C.

Finalmente, para executar o projeto, utilize o comando `npm start`.

A API roda na porta 3000 e possui as seguintes rotas:

### GET - /api/products
Lista todos os produtos

### GET (Com filtros) - /api/products&prodname=JohnDoe&prodbrand=BrandName&prodseller=JaneDoe&prodprice=777
Retorna o produto cujos parâmetros baterem com o que foi inserido na URL

### GET (Com slug do produto) - /api/products/SlugDoProduto
Retorna o produto com o Slug que foi inserido na URL

### POST (JSON) - /api/products
Cria um produto com os parâmetros JSON especificados na request

Os testes foram feitos utilizando o Postman. 
Para fins de exemplo, segue um produto de amostra com o formato do JSON para colocar no PUT:

```
{
"prodname": "Mouse Gamer",
"prodbrand": "Gamer Brand",
"prodseller": "Vendedor X",
"prodprice": 999,
}
```
