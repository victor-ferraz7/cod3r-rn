const express = require('express')
const app = express()

const produtoApi = require('./api/produto')
produtoApi(app, 'com Param!')


app.listen(3131, ()=>{
    console.log('Rodando na porta 3131')
})