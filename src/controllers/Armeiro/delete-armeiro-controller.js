const { ArmeiroModel } = require('../../models/Armeiro-model');

class DeleteArmeiroController {

    async delete(req, res) {

        try {

            const { id } = req.params;

            const armeiro = await ArmeiroModel.findByPk(id);

            if (!armeiro) {
                return res.status(404).json({ error: 'Armeiro não encontrado' })
            }

            await armeiro.destroy();

            return res.status(200).json({ message: 'Armeiro deletado com sucesso' })

        } catch (error) {

            return res.status(400).json({ error: 'Erro ao deletar armeiro' })

        }

    }


}

module.exports = new DeleteArmeiroController();