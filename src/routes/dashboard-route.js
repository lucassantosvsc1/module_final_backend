// Dependencias
const {Router} = require('express');
const {authMiddleware} = require('../middleware/auth-middleware');

// Controllers
const dashboardRelatoriosController = require('../controllers/Relatorios/dashboard-relatorios-controller');

//Rotas
const routerDashboard = Router();

routerDashboard.get('/dashboard/relatorio', authMiddleware, dashboardRelatoriosController.index);
routerDashboard.get('/dashboard/relatorio/usuario/:id', authMiddleware, dashboardRelatoriosController.acautelamentosPorUsuario);
routerDashboard.get('/dashboard/relatorio/armeiro/', authMiddleware, dashboardRelatoriosController.acautelamentosEmAbertoArmeiro);

module.exports = {routerDashboard}