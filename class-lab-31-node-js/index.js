import express from "express";
import { getUsers, saveUser } from "./services/user.js";
import { userSchema } from "./schema";
const app = express();

app.use(express.json());


app.use("/", (res, req) => {
  console.log("Deshboard");
});
app.use("/users", (res, req) => {
  const users = getUsers();
  res.json(users);
});
app.use("/signup", async (res, req) => {
  const user = await userSchema.validateAsync(req.body);
  saveUser(user.name, user.email, user.password);
  res.json({ message: "user Added" });
});

app.listen(3000, () => {
  console.log("Server Started");
});
