import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "db", "data", "users.json");

export function getUsers() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
export function getUserByEmail(email) {
  const users = getUsers();
  return users.find((user) => user.email === email);
}
export function saveUser(name, email, password) {
  const users = getUsers();
  const found = getUserByEmail(email);
  if (found) {
    throw new Error("user already exists.");
  }

  users.push({
    id: Date.now.toString(36),
    email,
    password,
    name,
  });
  fs.writeFileSync(filePath, JSON.stringify(users));
}
