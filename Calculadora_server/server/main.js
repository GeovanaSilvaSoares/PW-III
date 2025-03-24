const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors(
    {
        origin:'*'
    }
));

app.use(express.json())

app.use(

    express.urlencoded({
        extended: true
    })
)


app.get("/", (req, res, next) => {
    res.json({mensagem: 'Está funcionando!'});
});

app.post("/calcular", (req, res) => {
    try {
        let expressao = req.body.expressao.replace(/\^/g, "**"); // potenciação
        console.log("Expressão recebida:", expressao); 

        let resultado = eval(expressao);

        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        console.log("Resultado:", resultado);
        res.json({ resultado });
    } catch (error) {
        console.error("Erro ao calcular:", error);
        res.status(400).json({ erro: "Erro ao calcular" });
    }
});

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(5000, ()=>{console.log("Funcionando na porta 5000")})