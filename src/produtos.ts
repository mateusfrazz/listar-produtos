//Definindo o tipo do objeto
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

//declarando um novo objeto com os parametros definidos em Produto
const produtos: Produto[] = [
     {nome:"Arroz", preco: 10, emEstoque:  false},
     {nome:"Feijao", preco: 20, emEstoque: true},
     {nome:"Carne", preco: 30, emEstoque:  true },
     {nome: "batata", preco: 40, emEstoque:false},
]

//Função para listar produtos que estiver em estoque
function listarProdutosEstoque() {
   const produtoEstoque = produtos.filter((produto) => produto.emEstoque === true); 
   return produtoEstoque
}

console.log(listarProdutosEstoque());

//função para listar produtos com o preço abaixo de 30

function listarProdutosPrecoBaixo () {
  const produtoBaixoValor = produtos.filter((produto)=> produto.preco < 30)
  return produtoBaixoValor
}

console.log(listarProdutosPrecoBaixo())
