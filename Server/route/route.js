const express = require('express');
const router = express.Router();
const {getProjects,createProject} = require('./../controller/controller');
 
router.get('/projects', getProjects);
router.post('/project', createProject);
 
module.exports = router;