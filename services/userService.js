import path from "path"
import userModel from "../scheme/userSchema.js"

export const getReq = (req, res) => { res.sendFile(path.resolve("./index.html")) }

export const getUsers = async (req, res) => {
    res.json(await userModel.find())
}
export const postUser = (req, res) => {
    res.send({message : "User data succesfully saved "})
    userModel.create(req.body);
}