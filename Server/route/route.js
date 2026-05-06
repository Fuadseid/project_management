const express = require('express');
const router = express.Router();
const {getProjects,createProject} = require('./../controller/controller');
const assign = require('../controller/role.controller');
 
router.get('/projects', getProjects);
router.post('/project', createProject);
router.put('/assign-role/:id',assign)
 
module.exports = router;