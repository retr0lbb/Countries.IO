# Como usar Esta Aplicação Vite

Este guia rápido explica como configurar e executar a aplicação Vite React.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/retr0lbb/Countries.IO.git
```

2. Navegue até o diretório do projeto:

```bash
cd sua-pasta-criada
```

3. Instale as dependências do projeto usando npm ou yarn:

Com npm:

```bash
npm install
```

Com Yarn:

```bash
yarn
```

## Configuração

1. Crie um arquivo `.env` na raiz do seu projeto e defina suas variáveis de ambiente, se necessário.

Exemplo de arquivo `.env`:

```
VITE_REACT_API_KEY=SuaChaveDeAPIAqui
```

2. Certifique-se de configurar corretamente suas variáveis de ambiente no arquivo `.env`.

caso não tenha uma chave api do google maps uma versão desse projeto estara disponivel online
com esse link

## Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

Com npm:

```bash
npm run dev
```

Com Yarn:

```bash
yarn dev
```

Isso iniciará o servidor de desenvolvimento em [http://localhost:5173](http://localhost:5173).

## Construção para Produção

Para construir o aplicativo para produção, execute o seguinte comando:

Com npm:

```bash
npm run build
```

Com Yarn:

```bash
yarn build
```

Este comando cria uma versão otimizada do aplicativo na pasta `dist` pronta para implantação.

-----
