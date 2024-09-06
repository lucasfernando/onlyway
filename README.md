# Onlyway Backend

## Descrição

Este projeto contém o backend da aplicação Onlyway. Ele é responsável por fornecer uma API simples que retorna uma saudação personalizada.

## Como executar

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
2. Navegue até o diretório raiz do projeto.
3. Execute o seguinte comando:

```bash
docker compose up
```

Isso irá construir e iniciar a imagem do Docker para o backend.

## Exercício
Objetivo
Criar uma página web com uma lista e um campo de texto. O campo de texto deve funcionar como um filtro em tempo real para a lista, ou seja, a lista deve ser atualizada dinamicamente conforme o usuário digita no campo de texto.

### Requisitos
- HTML: Criar uma página HTML com os seguintes elementos: Um campo de texto (`<input type="text">`) Uma lista não ordenada (`<ul>`) com diversos itens (`<li>`)
- CSS: Estilizar a página como desejar.
- JavaScript:
Adicionar um evento de escuta para o evento input no campo de texto.
Obter o valor digitado no campo de texto.
Filtrar os itens da lista com base no valor digitado.
Atualizar a lista exibida na página com os itens filtrados.

### Dicas
Utilize o método addEventListener para adicionar o evento de escuta ao campo de texto.
Utilize o método filter para filtrar os itens da lista.
Utilize o método innerHTML para atualizar o conteúdo da lista na página.

### Exemplo

```html
<!DOCTYPE html>
<html>
<head>
  <title>Filtro de Lista</title>
</head>
<body>
  <h1>Filtro de Lista</h1>
  <input type="text" id="filtro" placeholder="Digite para filtrar...">
  <ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
  <script>
    // Código JavaScript aqui
  </script>
</body>
</html>
```

```js
const filtro = document.getElementById('filtro');
const lista = document.getElementById('lista');
const itens = Array.from(document.querySelectorAll('#lista li'));

filtro.addEventListener('input', () => {
  const texto = filtro.value.toLowerCase();
  const itensFiltrados = itens.filter(item => item.textContent.toLowerCase().includes(texto));
  lista.innerHTML = '';
  itensFiltrados.forEach(item => lista.appendChild(item));
});
```

### Bônus
Adicionar a funcionalidade de limpar o filtro ao clicar em um botão.
Permitir que o usuário escolha entre diferentes critérios de filtro (por exemplo, filtrar por nome ou por categoria).