import express from "express";
import { getUsers } from "./services/user";
import 
const app = express();

app.use(express.json());

app.use("/", (res, req) => {
  console.log("Deshboard");
});
app.use("/users", (res, req) => {
  const users = getUsers();
  res.json(users);
});
app.use("/signup", (res, req) => {
  const user = req.body;

});

app.listen(3000, () => {
  console.log("Server Started");
});
