const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Meu Projeto Cloud</title>
            </head>
            <body>
                <h1>Bem-vindo ao meu projeto!</h1>
                <p>Aplicação desenvolvida com Node.js e Express.</p>
                <a href="/sobre">Sobre</a> |
                <a href="/contato">Contato</a>
            </body>
        </html>
    `);
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Sobre o Projeto</title>
            </head>
            <body>
                <h1>Sobre o Projeto</h1>
                <p>Este site foi criado para a disciplina de Desenvolvimento de Software em Nuvem.</p>
                <a href="/">Voltar ao início</a>
            </body>
        </html>
    `);
});

// Rota 3: Contato
app.get('/contato', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Contato</title>
            </head>
            <body>
                <h1>Contato</h1>
                <p>Projeto acadêmico desenvolvido com Node.js.</p>
                <a href="/">Voltar ao início</a>
            </body>
        </html>
    `);
});

// Inicialização do servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
