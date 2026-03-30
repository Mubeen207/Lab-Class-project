import express from "express"

const app = express();
app.use(express.json())
const post = []

app.get("/users", (req, res) => {
    res.send({ name: "Mubeen", email: "mubeen@gmail.com" })
})
app.get("/posts", (req, res) => {
    res.send({ data: post })
})

app.post("/post", (req, res) => {
    post.push(req.body)
    console.log(post);
    res.send({ message: "Created", post })
})

app.listen(3000, () => {
    console.log("Response from Server");
})