const express = require('express'); // Importando o express
 
const app = express(); // Criando a aplicação
 
const PORT = 3000; // Definindo a porta do servidor
 
app.use(express.json()); // nos permite interpertrar JSON
 
function logger(req, res, next) { // Middleware de log
    console.log(req.method, req.url); // Exibi o método e a url acessada
    next() // Continua a execução
};
app.use(logger) // aplica o middleware em todas as rotas
 
// Middleware de validacão de senha
function verificarAcesso(req, res, next) {
    const senha = req.query.senha;
    if(senha === '1234'){
        next();
    } else {
        res.status(403).json({
           mensagem: "acesso negado, senha incororeta"  
        });      
    }
}
 
let produtos = [
    {id: 1, nome: "Notebook", preco: 7500},
    {id: 2, nome: "Mouse", preco: 403}
];
 
app.get("/", (req, res) => {
    res.send('Servidor Express funcionando');
});
 
app.get("/produtos", (req, res) => {
    res.json({
        ListadeProdutos: produtos
    });
});

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        mensagem: "Produto encontrado",
        id: produtos [id- 1] 
    });
});
 

app.post("/produtos", (req, res)=> {
    const novoProduto = req.body;// captura dos dados enviados no body da requisição
    produtos.push(novoProduto);// envia o novo produto para arry de produtos

    res.json({
    mensagem : 'Produto Cadastro com sucesso',
    produtos: novoProduto
    });
});


app.put("/produtos",(req,res)=>{
    const dadosAtualizados = req.body;
    produtos = produtos.map(produto =>{

    })
})


app.delete("/produtos", (req,res)=>{
    const produtoDeletado= req.body;
    const produto = produtos.findIndex(produto => produtos.id === produtoDeletado.id)

    if(produto >-1){
        produto.splice(produto,1);
    }
    res.json({
        mensagem: "Produto deletado",
        ListadeProdutos: produtos
    });
});

 //Rota protegita
 
 app.get("/admin", verificarAcesso,(req,res)=>{
    res.json({
        mensagem: 'Area Administrtiva acessada'
    });
 });


app.listen(PORT, () => {
    console.log("server running in http://localhost:3000")
});
 