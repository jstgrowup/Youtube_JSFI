const { model, Schema } = require("mongoose")

const UserSchema = new Schema({
    name: String
})
const UserModel = model("Users", UserSchema)
module.exports = UserModel