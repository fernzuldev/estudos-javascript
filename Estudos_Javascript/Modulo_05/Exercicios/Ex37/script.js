class Carrinho {
    constructor(itens = [], qtd = 0, valorTotal = 0) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {
        let itemCarrinho = this.itens.find(it => it.id === item.id);

        if (itemCarrinho) {
            itemCarrinho.qtd += item.qtd;
        } else {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    deleteItem(item) {
        let index = this.itens.findIndex(it => it.id === item.id);

        if (index !== -1) {
            let itemCarrinho = this.itens[index];

            this.qtd -= itemCarrinho.qtd;
            this.valorTotal -= itemCarrinho.preco * itemCarrinho.qtd;
            
            this.itens.splice(index, 1);
        }
    }
}

let carrinho = new Carrinho([
    { id: 1, nome: "Camisa", qtd: 1, preco: 20 },
    { id: 2, nome: "Short", qtd: 2, preco: 50 }
], 3, 120);

console.log(carrinho);

carrinho.addItem({ id: 1, nome: "Camisa", qtd: 3, preco: 20 });

console.log(carrinho);

carrinho.addItem({ id: 3, nome: "Boné", qtd: 2, preco: 10 });

console.log(carrinho);

carrinho.deleteItem({ id: 1, nome: "Camisa", qtd: 1, preco: 20 });

console.log(carrinho);