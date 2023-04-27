import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.use(express.json());

app.post("/generateJWT", (req, res) => {
  const payload = {
    name: "Rishabh",
  };
  const token = jwt.sign(payload, "mysecret", { expiresIn: 60 });
  res.json({ jwt: token });
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(8000, () => {
  console.log("SERVER IS LISTENING AT :8000");
});
