function salvar(req, res){
    res.send('Usuario > Salvar')
}

function obter (req, res){
    res.send('Usuario > Obter')
}

module.exports = { salvar , obter } //  cria um atributo salvar apontando para a função salvar, cria um atributo obter apontando para a função obter