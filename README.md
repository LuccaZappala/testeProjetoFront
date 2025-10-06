# 🥗 Nutrir & Viver: Calculadora Nutricional com IA

Bem-vindo ao repositório do projeto **Nutrir & Viver**! Esta é uma aplicação web completa e **totalmente responsiva** que oferece uma ferramenta para cálculo de calorias e macronutrientes, com a funcionalidade adicional de gerar planos de dieta personalizados através de Inteligência Artificial.

## 🌟 Visão Geral

O **Nutrir & Viver** tem como missão desmistificar a nutrição. O projeto oferece uma calculadora precisa e, como diferencial, se conecta a uma IA para criar sugestões de dietas realistas e baseadas nos dados do usuário, tornando a nutrição ainda mais acessível e personalizada.

## ✨ Principais Funcionalidades

* **Calculadora Nutricional:** Calcula o Gasto Energético Total Diário (TDEE) e a distribuição de macronutrientes com base em dados como gênero, idade, peso, altura, nível de atividade e objetivo.
* **Geração de Dietas com IA:** Após o cálculo, o usuário pode solicitar a geração de 3 opções de planos alimentares diários, criados pela API da OpenAI (`gpt-4o`) para atingir suas metas.
* **Design Responsivo:** A interface se adapta perfeitamente a qualquer dispositivo, desde **smartphones** a **desktops**, utilizando **Media Queries** e **Flexbox**.
* **Páginas Institucionais:**
    * **Quem Somos:** Apresenta a filosofia e a missão do projeto.
    * **Contato:** Apresenta a equipe técnica por trás da aplicação.

## 🛠️ Tecnologias Utilizadas

Este projeto é uma aplicação **Full Stack**, utilizando tecnologias de frontend e backend.

* **Frontend:**
    * **HTML5:** Estrutura e semântica das páginas.
    * **CSS3:** Estilização, layout com Flexbox e responsividade com Media Queries.
    * **Bootstrap 5:** Componentes de formulário para uma melhor UI/UX.
    * **JavaScript (Vanilla):** Lógica da calculadora, manipulação do DOM e comunicação (`fetch API`) com o backend.

* **Backend:**
    * **Node.js:** Ambiente de execução do servidor.
    * **Express.js:** Framework para criação do servidor e do endpoint da API.
    * **OpenAI API:** Para a geração de dietas personalizadas.
    * **DotEnv:** Para gerenciamento seguro das chaves de API.

## 📁 Estrutura do Projeto

CALCULADORA NUTRICIONAL/
## CSS/
   - bootstrap.min.css
   - style.css
## img/
   - nutriconalCapa.webp
   - (ícones de redes sociais)
## JS/
   - script.js: - (Lógica do Frontend)
   - server.js: - (Lógica do Backend)
## node_modules/   (Gerado pelo 'npm install')
## Pages/
   - contato.html
   - quemsomos.html
### env   (Arquivo local para a chave da API - NÃO COMPARTILHAR)
##.gitignore
## index.html    (Página inicial - Calculadora)
## package.json
## package-lock.json
## README.md


## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto, você precisa executar o **Frontend** e o **Backend** simultaneamente.

### Pré-requisitos
* **Node.js** instalado (versão LTS recomendada).
* Uma **chave de API da OpenAI**.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    cd [NOME_DA_PASTA]
    ```

2.  **Instale as dependências do Backend:**
    Este comando lê o `package.json` e baixa todas as bibliotecas necessárias para o servidor (`Express`, `OpenAI`, etc.) para a pasta `node_modules`.
    ```bash
    npm install
    ```

3.  **Configure a Chave de API:**
    * Na pasta raiz do projeto, crie um arquivo chamado `.env`.
    * Dentro deste arquivo, adicione sua chave da OpenAI no seguinte formato:
        ```
        OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ```

4.  **Inicie o Servidor Backend:**
    * Abra um terminal na pasta raiz do projeto.
    * Execute o comando abaixo. Este terminal deve permanecer aberto enquanto você usa a aplicação.
    ```bash
    node JS/server.js
    ```
    * Você deverá ver a mensagem: `Servidor rodando na porta http://localhost:3000`

5.  **Inicie o Frontend:**
    * Em um editor como o VS Code, clique com o botão direito no arquivo `index.html`.
    * Selecione **"Open with Live Server"** (ou abra o arquivo diretamente no seu navegador).
    * A página abrirá no navegador e agora poderá se comunicar com o servidor que está rodando.

## 👤 Equipe

Conheça os especialistas que dão vida ao **Nutrir & Viver**:

| Nome              |
| :---------------- |
| Bruno Barbosa     |
| Diana Souza Ribeiro |
| Lucca Zappala     |
| Enzo Converso     |








