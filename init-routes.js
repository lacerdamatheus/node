// Rotas no Express

const express = require('express');
const app = express();
const PORT= 3000;
app.use(express.json());


app.get("/produtos", (req, res)=>{
    res.json([
        {id: 1, nome: "Notebook", preco: 5000},
        {id:2, nome: "Mouse", preco:50}
    ]);
});

app.get("/usuario", (req, res)=>{
    res.json([
        {id: 1, nome: "Matheus"},
        {id:2, nome: "Gabriella"}
    ]);
});

app.post("/produtos", (req, res)=>{
    const novoProduto = req.body;
    res.json({
        mensagem: "Produto cadastrado com sucesso",
        produto: novoProduto
    });
});

app.put("/produtos/:id", (req, res)=>{
    const id = req.params.id;

    const dadosAtualizados = req.body
    res.json({
        mensagem: "Produto atualizado com sucesso",
        id: id,
        dados: dadosAtualizados
    })  
})

app.delete("/produtos/:id", (req, res)=>{
    const id = req.params.id;
    res.json({
        mensagem: "Produto removido com sucesso",
        id: id 
    })
})



app.listen(PORT,()=>{
console.log(`Servidor esta Funcionando em http://localhost:${PORT}`);
});


