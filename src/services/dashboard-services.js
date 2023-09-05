const { ArmaModel } = require('../models/Arma-model');
const { AcautelamentoModel } = require('../models/Acautelamento-model')
const { UsuariosModel } = require('../models/Usuarios-model');
const { ArmeiroModel } = require('../models/Armeiro-model');

 function quantidadeArmasCadastradas(){
    console.log('53')
    return ArmaModel.count();
}

function quantidadeArmasAcauteladas(){
    return 
}

function quantidadeUsuariosCadastrados(){
    return UsuariosModel.count();
}

function quantidadeArmeirosCadastrados(){
    return ArmeiroModel.count();
}

function quantidadeAcautelamentos(){
    return AcautelamentoModel.count();
}

function quantidadeAcautelamentosEmAbertoArmeiro(id){

    return AcautelamentoModel.count({
        where: {
            armeiro_id: id,
            dataDevolucao: null
        }
    });

}

function quantidadeAcautelamentosPorUsuario(id){

    return AcautelamentoModel.count({
        where: {
            usuario_id: id,
            dataDevolucao: null
        }
    });
    
}

exports.dashboardServices = {
    quantidadeArmasCadastradas,
    quantidadeArmasAcauteladas,
    quantidadeUsuariosCadastrados,
    quantidadeArmeirosCadastrados,
    quantidadeAcautelamentos,
    quantidadeAcautelamentosEmAbertoArmeiro,
    quantidadeAcautelamentosPorUsuario
}