# Página Que Vende - Landing Page de Alta Conversão

Este repositório contém o código-fonte de uma Landing Page moderna, ultra rápida e responsiva para a agência **Página Que Vende**, focada na conversão e venda de serviços de desenvolvimento de Landing Pages.

O design foi estruturado em tons de azul royal, preto e branco, utilizando as melhores práticas de SEO, carregamento rápido e gatilhos mentais para maximizar as vendas.

---

## 🚀 Como Visualizar o Projeto Localmente

Por ter sido desenvolvida em **HTML5, CSS3 e JavaScript Puros (Vanilla)**, a página não necessita de nenhuma instalação complexa.

1. **Opção Simples:**
   - Faça o download ou clone este repositório.
   - Dê dois cliques no arquivo [index.html](index.html) para abri-lo diretamente no seu navegador.

2. **Opção Recomendada (com Servidor Local):**
   - Se você utiliza o VS Code, instale a extensão **Live Server**.
   - Clique com o botão direito em `index.html` e selecione **Open with Live Server**. Isso abrirá o projeto em `http://127.0.0.1:5500` com atualização automática em tempo real.

---

## 🛠️ Como Personalizar

### 1. Alterar o Número do WhatsApp
Para atualizar o link do WhatsApp com o seu número de atendimento real:
1. Abra o arquivo [script.js](script.js).
2. Na linha **153**, mude o valor da variável `whatsappNumber` para o seu número com o código do país e DDD (apenas números, ex: `5571989230751` para Salvador):
   ```javascript
   const whatsappNumber = '5571989230751'; // Seu número aqui
   ```
3. O script atualizará automaticamente todos os botões de CTA da página com o seu link correto e uma mensagem personalizada.

### 2. Logotipo Personalizado
O logotipo oficial enviado foi renderizado em vetor SVG em [assets/logo.svg](assets/logo.svg) para carregamento instantâneo. Se você quiser substituir por uma imagem em formato `.png` ou `.jpg`:
1. Salve sua nova imagem na pasta `assets` (ex: `assets/logo.png`).
2. Abra o arquivo [index.html](index.html) e substitua a referência de `assets/logo.svg` para a sua nova imagem nas tags:
   - `<link rel="icon" type="..." href="...">` (Favicon na linha 22)
   - `<img src="assets/logo.svg" ...>` (Linha 31 e linha 470)

---

## 🌐 Como Publicar no GitHub Pages (Hospedagem Grátis)

O GitHub oferece hospedagem gratuita para sites estáticos via **GitHub Pages**. Para colocar o seu site no ar em minutos:

1. **Crie um repositório no seu GitHub** (ex: `paginaquevende`).
2. **Envie o código para o GitHub** (veja a seção abaixo).
3. **Ative o Pages:**
   - Vá nas configurações do seu repositório no GitHub (**Settings**).
   - No menu lateral esquerdo, clique em **Pages**.
   - Sob a seção **Build and deployment**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
   - Clique em **Save**.
4. Em poucos minutos, o GitHub gerará o link oficial do seu site (ex: `https://seu-usuario.github.io/paginaquevende/`).

---

## 💻 Enviando para o GitHub via Terminal

Abra o terminal na pasta do projeto e execute os seguintes comandos:

```bash
# 1. Inicializar o repositório Git local
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Criar o primeiro commit
git commit -m "feat: lancamento oficial da Landing Page Página Que Vende"

# 4. Renomear a branch principal para main
git branch -M main

# 5. Conectar ao seu repositório remoto do GitHub (substitua pelo seu link)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 6. Enviar os arquivos para o repositório
git push -u origin main
```

---

## ⚡ Diferenciais de Performance

- **Zero Frameworks:** Sem jQuery, Bootstrap ou construtores de blocos pesados (WordPress/Elementor).
- **SEO Otimizado:** Tags meta prontas para compartilhamento no Instagram, WhatsApp e melhor ranqueamento no Google.
- **Animações Fluidas:** Efeitos visuais dinâmicos feitos em CSS puro e com a API Intersection Observer do JavaScript, garantindo estabilidade e fluidez.
