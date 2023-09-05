const { ArmeiroModel } = require('../../models/Armeiro-model');

class FindArmeiroController {

    async findAll(req, res) {

        try {

            const armeiros = await ArmeiroModel.findAll();

            return res.status(200).json(armeiros);

        } catch (error) {

            return res.status(400).json({ error: 'Erro ao buscar armeiros' })

        }

    }

    async findOne(req, res) {

        try {

            const { id } = req.params;

            const armeiro = await ArmeiroModel.findOne({ where: { id } });

            if (!armeiro) {
                return res.status(404).json({ error: 'Armeiro não encontrado' })
            }

            return res.status(200).json(armeiro);

        } catch (error) {

            return res.status(400).json({ error: 'Erro ao buscar armeiro' })

        }

    }

    async myInfo(req, res) {

        const { id } = req;

        try {

            const armeiro = await ArmeiroModel.findOne({ where: { id } });

            if (!armeiro) {
                return res.status(404).json({ error: 'Armeiro não encontrado' })
            }

            return res.status(200).json(armeiro);

        }

        catch (error) {

            return res.status(400).json({ error: 'Erro ao buscar armeiro' })

        }

    }
}

module.exports = new FindArmeiroController();