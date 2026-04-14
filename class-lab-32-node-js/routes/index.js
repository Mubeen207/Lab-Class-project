import express from "express";
import getUser from "./users/get.js";
import postUser from "./users/post.js";
// define routers variable
const router = express.Router();
const routes = () => {

    router.get("/users", getUser);
    router.post("/users", postUser);
    
}

export default routes;