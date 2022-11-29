const tratamento_read = (model) => {
    return "select * from tratamento;"
}

const tratamento_create = (model) => {
    return `insert into tratamento values(null, ${model.consulta}, "${model.tratamento}", ${model.valor});`
}

const tratamento_update = (model) => {
    return `update tratamento set consulta = ${model.consulta}, tratamento = "${model.tratamento}", valor = ${model.valor} where id = ${model.id}`
}

const tratamento_delete = (model) => {
    return `delete from tratamento where id = ${model.id}`
}

const tratamento_view = (model) => {
    return `select * from tratamento_vw where id = ${model.id};`
}

module.exports = { 
    tratamento_read,
    tratamento_create,
    tratamento_update,
    tratamento_delete,
    tratamento_view
 }