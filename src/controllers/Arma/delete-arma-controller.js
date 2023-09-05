const { ArmaModel } = require('../../models/Arma-model');

class DeleteArmaController {

    async delete(req, res) {

        try {

            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'Id não informado' })
            }

            const arma = await ArmaModel.findByPk(id);

            if (!arma) {
                return res.status(404).json({ error: 'Arma não encontrada' })
            }

            await arma.destroy();

            return res.status(200).json({ message: 'Arma deletada com sucesso' })

        } catch (error) {

            return res.status(400).json({ error: 'Erro ao deletar arma' })

        }


    }

}

module.exports = new DeleteArmaController();