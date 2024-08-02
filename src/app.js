import express from "express";

const app = express();

app.get( "/testExpress", (req,res) => {
    res.status(200).send( "Express está em execução !!!" );
});


export default app;
