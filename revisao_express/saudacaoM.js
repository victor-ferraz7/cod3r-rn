function saudacao(nome){
    return function (req, res, next){
        console.log(`Saaalve ${nome}`)
        next()
    }
}

module.exports = saudacao