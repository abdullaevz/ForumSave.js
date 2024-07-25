import express from "express"
import path from "path"
import mongoose from "mongoose";
import { upload } from "./utils/multer.js";
import dotenv from "dotenv"
import { getReq, getUsers, postUser } from "./services/userService.js";

const app = express();
app.use(express.json())
dotenv.config();
const URI = process.env.URI
const PORT = process.env.PORT

app.get("/",getReq)

app.get("/users", getUsers)

app.post("/register", upload.single("profilSekli"), postUser)

app.listen(PORT, async () => {
    console.log("Server is runing");
    await mongoose.connect(URI)
    console.log("Connected to MongoDB");
});