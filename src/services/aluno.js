const getAluno = async (params) => {
    let aluno = {}
    if (params.name === "Fabio") {
        aluno.id = 2021
        aluno.nome = "Fabio"
        aluno.sobrenome = "Wrzesinski"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    } else {
        throw "Aluno não cadastrado!"
    }
    return aluno
}

module.exports.getAluno = getAluno