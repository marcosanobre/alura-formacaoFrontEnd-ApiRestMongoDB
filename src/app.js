import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com MongoDB: Sucesso"); 
});

// Implementa / instancia um
// servidor Http
const app = express();
// Middware do Express que
// converte o Body das requisições
// em JSOn
app.use( express.json() );

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

function buscaLivro(id) {
    return livros.findIndex( livro => {
        return livro.id === Number(id);
    })
}

app.get( "/testExpress", (req,res) => {
    res.status(200).send( "Express está em execução !!!" );
});

app.get( "/livros", (req,res) => {
    res.status(200).json( livros );
});

app.post( "/livros", (req,res) => {
    livros.push( req.body );
    res.status(200).send( "Livro cadastrado com sucesso" );
});

app.put( "/livros/:id", (req,res) => {
    const index = buscaLivro( req.params.id );
    livros[index].titulo = req.body.titulo;
    res.status(200).json( livros );
});

app.delete( "/livros/:id", (req,res) => {
    const index = buscaLivro( req.params.id );
    livros.splice(index, 1);
    res.status(200).send( "Livro removido com sucesso." );
});

export default app;
