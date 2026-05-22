// primeiros passo para criação de um servidor com express 
//abrir o terminal e dar os seguintes comandos
// npm init -y (para inicializar o NPM)
//npm install express (para instalaçõa das dependencias do framework Express)
//------------------------------------------------------------------------------//

//Importa a biblioteca Express para dentro do projeto 
const express = require('express');

//cria a aplicação express 
const app = express();

const PORT = 3000; //porta do servidor 

//Middleware nativo do Express que permite a nossa aplicação interpretar dados enviados em JSON 
app.use(express.json()); 

//criação do metodo GET 
app.get("/", (req,res)=>{

    res.send("Servidor Express Funcionando")
});

app.listen(PORT,()=>{
console.log(`Servidor esta Funcionando em http://localhost:${PORT}`);
});