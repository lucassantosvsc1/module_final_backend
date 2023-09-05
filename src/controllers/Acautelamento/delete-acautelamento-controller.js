const { AcautelamentoModel } = require("../../models/Acautelamento-model");

class DeleteAcautelamentoModel{

    async delete(req, res){

        try {
            
            const { id } = req.params;

            const acautelamento = await AcautelamentoModel.findByPk(id);

            if(!acautelamento){
                return res.status(400).json({ error: 'Acautelamento não encontrado' })
            }

            if(!acautelamento.dataDevolucao){
                return res.status(400).json({ error: 'Arma já devolvida' })
            }

            await AcautelamentoModel.destroy({
                where: {
                    id
                }
            });

            return res.status(200).json({ message: 'Acautelamento deletado com sucesso' })

        } catch (error) {
            
        }

    }

}

module.exports = new DeleteAcautelamentoModel();