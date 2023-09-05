// Dependencias
const { Router } = require('express');
const { authMiddleware } = require('../middleware/auth-middleware');

// Controllers
const addUsuarioController = require('../controllers/Usuarios/add-usuarios-controller');
const findUsuariosController = require('../controllers/Usuarios/find-usuarios-controller');
const updateUsuariosController = require('../controllers/Usuarios/update-usuarios-controller');
const deleteUsuariosController = require('../controllers/Usuarios/delete-usuarios-controller');

//Rotas
const routerUsuarios = Router();

routerUsuarios.post('/militares/add', authMiddleware, addUsuarioController.add);
routerUsuarios.get('/militares/find', authMiddleware, findUsuariosController.find);
routerUsuarios.get('/militares/find/:id', authMiddleware, findUsuariosController.findById);
routerUsuarios.put('/militares/update/:id', authMiddleware, updateUsuariosController.update);
routerUsuarios.delete('/militares/delete/:id', authMiddleware, deleteUsuariosController.delete);

module.exports = { routerUsuarios }