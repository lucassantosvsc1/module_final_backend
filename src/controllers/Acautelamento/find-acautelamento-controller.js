const { AcautelamentoModel } = require("../../models/Acautelamento-model");

class FindAcautelamentoController {

    async findAll(req, res) {

        try {

            const Acautelamentos = await AcautelamentoModel.findAll();

            if (!Acautelamentos) {
                return res.status(400).json({ error: 'Erro ao buscar acautelamentos' })
            }

            return res.status(200).json(Acautelamentos)

        } catch (error) {

            return res.status(400).json({ error: 'Erro ao buscar acautelamentos' })

        }

    }

    async findOne(req, res) {


        try {

            const { id } = req.params;

            const Acautelamento = await AcautelamentoModel.findByPk(id);

            if (!Acautelamento) {
                return res.status(400).json({ error: 'Nenhum acautelamento encontrado' })
            }

            return res.status(200).json(Acautelamento)


        } catch (error) {

            return res.status(400).json({ error: 'Erro ao buscar acautelamento' })

        }

    }

}

module.exports = new FindAcautelamentoController();