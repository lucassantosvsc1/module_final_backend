const { ArmeiroModel } = require('../../models/Armeiro-model');
const jwt = require('jsonwebtoken');

class LoginArmeiroController {

    async login(req, res) {

        try {

            const { registroMilitar, senha } = req.body;

        //Verificando se os dados foram recebidos
        if (!registroMilitar || !senha) {
            return res.status(400).json({ error: 'Dados ausentes' })
        }

        //Verificando se o armeiro já foi registrado
        const armeiro = await ArmeiroModel.findOne({ where: { registroMilitar } });

        if (!armeiro) {
            return res.status(400).json({ error: 'Armeiro não cadastrado' })
        }

        //Verificando se a senha está correta
        if (senha !== armeiro.senha) {
            return res.status(400).json({ error: 'Senha incorreta' })
        }

        //Criando token
        const token = jwt.sign({
            id: armeiro.id,
        },
            process.env.SECRET_TOKEN,
            {
                expiresIn: process.env.TOKEN_EXPIRES_IN
            }     
        )

        return res.status(200).json({ token });
            
        } catch (error) {

            return res.status(500).json({ error: 'Erro interno do servidor' })
            
        }

    }

}

module.exports = new LoginArmeiroController();