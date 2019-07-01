const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app) // sempre que o consign for carregar um módulo, passará app como parâmetro para todos os módulos que for carregar a partir do consign

app.db = db

app.listen(3232, () =>{
    console.log(" Back rodando na porta 3232")
})