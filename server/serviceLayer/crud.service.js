const userModel = require('../databaseLayer/user.model');
async function getUser() {
    const allUsers = await userModel.find({});
    return allUsers;
}

async function createUser(name,password,email, created_at, updated_at) {
    const createUser = await userModel.create({name:name, email:email, password:password, created_at:created_at, updated_at:updated_at});
    return createUser;
}
async function updateUser(id, name, password, email, created_at, updated_at) {
    const updateUser = await userModel.findOneAndUpdate({_id:id}, {name:name, email:email, password:password, created_at:created_at, updated_at:updated_at});
    return updateUser;
}
module.exports = {getUser, createUser, updateUser}
