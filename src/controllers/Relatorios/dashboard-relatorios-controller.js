const { ArmaModel } = require('../../models/Arma-model');
const { AcautelamentoModel } = require('../../models/Acautelamento-model')
const { UsuariosModel } = require('../../models/Usuarios-model');
const { ArmeiroModel } = require('../../models/Armeiro-model');


class DashboardRelatoriosController{

    async index(req, res){

        try {
            
            const { id } = req;

            if(!id){
                return res.status(400).json({ error: 'Usuário não autenticado' });
            }

            const quantidadeArmas = await ArmaModel.count();

            const armasAcauteladas = await AcautelamentoModel.count({
                where: {
                    dataDevolucao: null
                }
            })

            const quantidadeArmasDisponiveis = quantidadeArmas - armasAcauteladas;
            
            
            const quantidadeUsuarios = await UsuariosModel.count()
            
            const quantidadeArmeiros = await ArmeiroModel.count();
            
            const totalDeAcautelamentos = await AcautelamentoModel.count();
            

            return res.status(200).json({
                quantidadeArmas,
                armasAcauteladas,
                quantidadeArmasDisponiveis,
                quantidadeUsuarios,
                quantidadeArmeiros,
                totalDeAcautelamentos
            });

        } catch (error) {
            
        }

    }

    async acautelamentosPorUsuario(req, res){

        try {
            
            const { id } = req.params;

            if(!id){
                return res.status(400).json({ error: 'Usuário não autenticado' });
            }

            const quantidadeAcautelamentosPorUsuario = await AcautelamentoModel.count({
                where: {
                    usuario_id: id,
                    dataDevolucao: null
                }
            });

            return res.status(200).json({ quantidadeAcautelamentosPorUsuario });

        } catch (error) {
            
        }

    }

    async acautelamentosEmAbertoArmeiro(req, res){

        try {
            
            const { id } = req;

            if(!id){
                return res.status(400).json({ error: 'Usuário não autenticado' });
            }

            const qtdAcautelamentosEmAbertoArmeiro = await AcautelamentoModel.count({
                where: {
                    armeiro_id: id,
                    dataDevolucao: null
                }
            });

            return res.status(200).json({ qtdAcautelamentosEmAbertoArmeiro });

        } catch (error) {
            
        }

    }


}

module.exports = new DashboardRelatoriosController();
