const { AcautelamentoModel } = require("../../models/Acautelamento-model");

class UpdateAcautelamentoController{

    async devolucao(req, res){

        try {
            
            const { id } = req.params;

            const dataDevolucao = new Date().toISOString().split('T')[0];

            const acautelamento = await AcautelamentoModel.findByPk(id);

            if(!acautelamento){
                return res.status(400).json({ error: 'Acautelamento não encontrado' })
            }

            if(acautelamento.dataDevolucao){
                return res.status(400).json({ error: 'Arma já devolvida' })
            }

            if(!dataDevolucao){
                return res.status(400).json({ error: 'Data de devolução não informada' })
            }

            await AcautelamentoModel.update({
                dataDevolucao
            },{
                where: {
                    id
                }
            });

            return res.status(200).json({ message: 'Arma devolvida com sucesso' })

        } catch (error) {
            
        }

    }

    async update(req, res){

        try {
            
            const { id } = req.params;
            const { usuario_id, arma_id, dataAcautelamento, dataDevolucao } = req.body;

            const acautelamento = await AcautelamentoModel.findByPk(id);

            if(!acautelamento){
                return res.status(400).json({ error: 'Acautelamento não encontrado' })
            }

            if(!acautelamento.dataDevolucao){
                return res.status(400).json({ error: 'A arma deve ser devolvida antes de poder ser editado o acautelamento!' })
            }


            await AcautelamentoModel.update({
                usuario_id, 
                arma_id, 
                dataAcautelamento, 
                dataDevolucao
            },{
                where: {
                    id
                }
            });

            return res.status(200).json({ message: 'Acautelamento atualizado com sucesso' })

        } catch (error) {
            
        }

    }

}

module.exports = new UpdateAcautelamentoController();