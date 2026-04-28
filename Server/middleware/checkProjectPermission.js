const projectRoles = require("../config/permission");
const ProjectMember = require("../model/projectmember.model");
const httpStatus = require("http-status").status;
const checkProjectPermission = (permission) => {
  return async (req, res, next) => {
    try {
     const userId = req.user.id;
     const projectId = req.params.projectId;
     if(!userId){
        return res.status(httpStatus.UNAUTHORIZED).json({message:"Unauthorized"})
     }
     const member = await ProjectMember.findOne({
        user_id: userId,
        project_id: projectId
     })
     if(!member){
        return res.status(httpStatus.FORBIDDEN).json({message:"Not in project"})
     }
     const permission = projectRoles[member.role];
     if(!permission || !permission.includes(permission)){
        return res.status(httpStatus.FORBIDDEN).json({message:"Forbidden"})
     }

    } catch (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Internal Server Error"})
    }
  };
};

module.exports = checkProjectPermission;

