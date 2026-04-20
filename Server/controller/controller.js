const Blog = require("./../model/model");

const createProject = async (req, res) => {
    try {
      await Blog.create(req.body);
      res.send({ success: true, message: 'Project created successfully' });
    } catch (error) {
      res.status(500).send({ error: true, message: error.message });
    }
  };
   
  const getProjects = async (req, res) => {
    try {
      const projects = await Blog.find({});
      res.json(projects);
    } catch (error) {
      res.status(500).send({ error: true, message: error.message });
    }
  };
   
  module.exports = {
    createProject,
    getProjects,
  };