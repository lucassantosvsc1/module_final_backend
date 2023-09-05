const { UsuariosModel } = require('../../models/Usuarios-model');

class FindUsuariosController {
  async find(req, res) {

    try {
        
        const usuarios = await UsuariosModel.findAll();

        if (!usuarios) {

            return res.status(404).json({ error: 'Nenhum usuário encontrado' })

        }
    
        return res.status(200).json(usuarios);

    } catch (error) {
        
        return res.status(400).json({ error: 'Erro ao buscar usuários'})
    }
  }

  async findById(req, res) {

    try {

        const { id } = req.params;

        const usuario = await UsuariosModel.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }

        return res.status(200).json(usuario);

        
    } catch (error) {
        
    }

  }
}

module.exports = new FindUsuariosController();