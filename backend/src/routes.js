const express = require('express');

const OrganizationController = require('./controllers/OrganizationController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// routes.get('/users', UserController.index);
// routes.post('/users', UserController.store);

routes.get('/organizations', OrganizationController.index);
routes.post('/organizations', OrganizationController.store);

routes.get('/organizations/:organization_id/users', UserController.index);
routes.post('/organizations/:organization_id/users', UserController.store);



module.exports = routes;