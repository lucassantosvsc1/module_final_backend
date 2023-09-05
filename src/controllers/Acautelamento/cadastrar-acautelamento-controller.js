const { UsuariosModel } = require( '../../models/Usuarios-model');
const { AcautelamentoModel } = require('../../models/Acautelamento-model');
const { ArmaModel } = require('../../models/Arma-model');

class CadastrarAcautelamentoController {

    async create(req, res) {

        try {

            //Verificando se recebeu o id do armeiro atravez do middleware
            const { id } = req;
            if (!id) {
                return res.status(400).json({ error: 'Usuário não autenticado' });
            }

            //Verificando se recebeu os dados do usuario e da arma
            const { usuario_id, arma_id } = req.body;
            if (!usuario_id || !arma_id) {
                return res.status(400).json({ error: 'Dados incompletos' });
            }

            //Verificando se o usuario e a arma existem
            const usuario = await UsuariosModel.findByPk(usuario_id);
            if (!usuario) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }

            const arma = await ArmaModel.findByPk(arma_id);
            if (!arma) {
                return res.status(400).json({ error: 'Arma não encontrada' });
            }

            //Verificando se a arma já está acautelada
            const armaEstaAcautelada = await AcautelamentoModel.findOne({
                where: {
                    arma_id,
                    dataDevolucao: null
                }
            });

            if (armaEstaAcautelada) {
                return res.status(400).json({ error: 'Arma já acautelada' });
            }

            // Verificando se o usuario já está acautelado
            const acautelamento = await AcautelamentoModel.create({
                usuario_id,
                arma_id,
                armeiro_id: id,
                dataAcautelamento: new Date().toISOString().split('T')[0],
            })
            if (!acautelamento) {
                return res.status(400).json({ error: 'Erro ao acautelar arma' });
            }

            //Atualizando o status da arma
            return res.status(200).json(acautelamento);


        }

        catch (error) {

            return res.status(500).json({ error: 'Erro interno no servidor' });

        }

    }

}


module.exports = new CadastrarAcautelamentoController();