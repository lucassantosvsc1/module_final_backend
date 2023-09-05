const { UsuariosModel } = require('../../models/Usuarios-model');
const { AcautelamentoModel } = require('../../models/Acautelamento-model');

class DeleteUsuariosModel{

    async delete(req, res){

        try {

            const { id } = req.params;

            console.log("Aqui")
            const usuario = await UsuariosModel.findByPk(id);


            if(!usuario){
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }
            console.log("Aqui")
            const acautelamentos = await AcautelamentoModel.findAll({
                where: {
                    usuario_id: id,
                    dataDevolucao: null
                }
            });
            console.log("Aqui")

            if(acautelamentos.length > 0){
                return res.status(400).json({ error: 'Usuário possui acautelamentos em aberto, não é possivel exclui-lo!' })
            }

            console.log("Aqui")
            await UsuariosModel.destroy({
                where: {
                    id
                }
            });
            console.log("Aqui")
            return res.status(200).json({ message: 'Usuário deletado com sucesso' })

        } catch (error) {
            
        }

    }

}

module.exports = new DeleteUsuariosModel();