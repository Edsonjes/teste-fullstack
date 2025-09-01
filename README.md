# Teste Técnico - Pokémon City

Este projeto consiste em uma aplicação fullstack que permite buscar pokémons por cidade, utilizando React no front-end e Node.js/Express no back-end.

## Estrutura do Projeto

- **api/**: Backend Node.js/Express
- **web/**: Frontend React + Vite
- **docker-compose.yml**: Orquestração dos containers

---

## Instalação e Execução

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos para rodar o projeto

1. **Clone o repositório**
   ```sh
   git clone <url-do-repositorio>
   cd TesteTecnico
   ```

2. **Suba os containers**
   ```sh
   docker-compose up --build
   ```

3. **Acesse a aplicação**
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - API: [http://localhost:3001/api](http://localhost:3001/api)

---

## Como Utilizar

1. Abra o navegador e acesse [http://localhost:8080](http://localhost:8080).
2. Na tela inicial, digite o nome de uma cidade e clique em buscar.
3. O sistema irá retornar os pokémons encontrados para aquela cidade.

---

## Exemplos de Resultado

- Ao buscar por "Londres", o sistema retorna:
  ```json
  {
    "cidade": "Londres",
    "pokemons": [
      { "nome": "Pikachu", "tipo": "Elétrico" },
      { "nome": "Charmander", "tipo": "Fogo" }
    ]
  }
  ```

---

## Desenvolvimento Local (sem Docker)

### Backend

```sh
cd api
npm install
npm start
```

### Frontend

```sh
cd web
npm install
npm run dev
```
Acesse [http://localhost:5173](http://localhost:5173) para visualizar o frontend localmente.

---

## Observações

- O frontend faz requisições para a API via Nginx usando proxy reverso.
- As portas podem ser alteradas no arquivo `docker-compose.yml` conforme necessidade.
- Para personalizar a configuração do Nginx, edite o arquivo `web/default.conf`.

---

## Contato

Dúvidas ou sugestões? Entre em contato pelo e-mail: **seuemail@dominio.com**
