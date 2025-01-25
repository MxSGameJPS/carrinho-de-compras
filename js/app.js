function adicionar() {
    //recuperando produto, quantidade e o valor unitário
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let preco = (valorUnitario * quantidade.value).toFixed(2);
    //Adicionando produto ao carrinho
    let produtoCarrinho = document.querySelector('.carrinho__produtos__produto');
    let novoItem = document.createElement('div');
    novoItem.classList.add('carrinho__produtos__produto__item');
    novoItem.setAttribute('data-produto', produto);
    novoItem.innerHTML = `<span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;
    produtoCarrinho.appendChild(novoItem);
    // Atualizando o valor total
    let valorTotal = document.querySelector('.carrinho__total');
    let valorTotalAtual = parseFloat(valorTotal.textContent.split('R$')[1]);
    let novoValorTotal = valorTotalAtual + (valorUnitario * parseInt(quantidade.value));
    valorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$ ${novoValorTotal.toFixed(2)}</span>` 
    // Limpando a caixa de quantidade
    quantidade.value = ""; 
}

function limpar() {
    let produtoCarrinho = document.querySelector('.carrinho__produtos__produto');
    while (produtoCarrinho.firstChild) {
        produtoCarrinho.removeChild(produtoCarrinho.firstChild);
    }
    let valorTotal = document.querySelector('.carrinho__total');
    valorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$ 0.00</span>`
    quantidade.value = "";
}