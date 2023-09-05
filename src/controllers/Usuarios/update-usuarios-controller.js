const { UsuariosModel } = require('../../models/Usuarios-model');

class UpdateUsuariosController {

    async update(req, res) {

        try {

            const { id } = req.params;

            const { registroMilitar, nome, batalhao } = req.body;

            if (!id) {
                return res.status(400).json({ error: 'Id não informado' })
            }

            if (!registroMilitar && !nome && !batalhao) {
                return res.status(400).json({ error: 'Nenhum dado informado' })
            }

            if (registroMilitar && typeof registroMilitar !== 'string') {
                return res.status(400).json({ error: 'Registro militar inválido' })
            }

            if (nome && typeof nome !== 'string') {
                return res.status(400).json({ error: 'Nome inválido' })
            }

            if (batalhao && typeof batalhao !== 'string') {
                return res.status(400).json({ error: 'Batalhão inválido' })
            }

            const usuario = await UsuariosModel.findByPk(id);

            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }


            const usuarioAtualizado = await UsuariosModel.update({
                registroMilitar,
                nome,
                batalhao
            }, {
                where: {
                    id
                }
            });

            return res.status(200).json({ message: 'Usuário atualizado com sucesso'});

        } catch (error) {

        }

    }

}

module.exports = new UpdateUsuariosController();