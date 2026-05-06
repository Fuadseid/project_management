const assignRole = require("../Service/role.service");


const assign = async (id,role)=>{
    const assign = assignRole(id,role) 
    return assign;
}

module.exports = assign;