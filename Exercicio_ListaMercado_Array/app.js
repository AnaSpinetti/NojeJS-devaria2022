try {
    

const listaMercadoDisponivel = ['arroz', 'feijão', 'macarrão', 'carne']

// Recebendo os dados do usuário
const listaitensSolicitados = process.argv.slice(2);

//Verificando os itens disponiveis, comparando a lista de produtos solicitados por argumentos, com a lista de itens disponiveis no mercado
const listaDeitensSolicitadosDisponiveis = listaMercadoDisponivel.filter(produto => {
    return listaitensSolicitados.find(argumento => argumento.toLowerCase() === produto.toLowerCase());
})

listaDeitensSolicitadosDisponiveis.forEach(produto => console.log("este produto temos: " + produto))

//Verificando os itens indisponiveis, comparando a lista de produtos solicitados por argumentos, com a lista de itens disponiveis no mercado
const listaDeitensSolicitadosIndisponiveis = listaitensSolicitados.filter(argumento => {
    return !listaMercadoDisponivel.find(produto => produto.toLowerCase() === argumento.toLowerCase() )
})

listaDeitensSolicitadosIndisponiveis.forEach(argumento => console.log("este produto não temos: " + argumento))


// Devolvendo a lista de produtos que temos no mercado ordenada
listaMercadoDisponivel.sort()
listaMercadoDisponivel.forEach(produto => console.log('Estes são os produtos que temos: ' + produto))
} catch (error) {
    console.log("Não foi possivel realizar a sua consulta, tente mais tarde")
}
