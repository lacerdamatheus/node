// Midleware de acesso
// Ele será usado para realizar uma autenticação
 
const express = require('express'); // Importando o express
 
const app = express(); // Criando a aplicação
 
const PORT = 3000; // Definindo a porta do servidor
 
app.use(express.json()); // nos permite interpertrar JSON
 
function verificarAcesso(req, res, next) {
 
    const autorizado = true // Simulação de acesso
    // true: acesso liberado
    // false:  negar o acesso

    if(Autoriza){
        next();
    }else{
        res.status(403).json({
            mensagem: "Acesso Negado"
        });
    }

}; 

//Incluindo o middleware na rota

app.get("/adimn", verificarAcesso,(req, res)=>{
    
})