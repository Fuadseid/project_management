const Project = require("../model/project.model")


const createProject = async (projectData) => {
  const project = new Project(projectData);
  return await project.save();
};

const getProjects = async () => {
  return await Project.find({});
};

module.exports = {
  createProject,
  getProjects
};