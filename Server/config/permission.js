const projectRoles = {
  admin: ["create_task", "edit_task", "delete_task", "manage_team"],
  manager: ["create_task", "edit_task", "assign_task"],
  worker: ["create_task", "edit_own_task"],
  viewer: ["read_task"]
};
module.exports = projectRoles;