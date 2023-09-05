const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

//Instanciando sequelize
const sequelize = new Sequelize(dbConfig);


//Models
const { ArmeiroModel } = require('../models/Armeiro-model');
const { ArmaModel } = require('../models/Arma-model');
const { UsuariosModel } = require('../models/Usuarios-model');
const { AcautelamentoModel } = require('../models/Acautelamento-model');

//Instanciando Models
ArmeiroModel.init(sequelize);
ArmaModel.init(sequelize);
UsuariosModel.init(sequelize);
AcautelamentoModel.init(sequelize);

//Associando Models
ArmeiroModel.associate(sequelize.models);
ArmaModel.associate(sequelize.models);
UsuariosModel.associate(sequelize.models);
AcautelamentoModel.associate(sequelize.models);

//Exportando conexão
module.exports = sequelize;
