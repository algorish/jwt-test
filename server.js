import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.use(express.json());

app.post("/generateJWT", (req, res) => {
  const {exp} = req.body
  const payload = {
    name: "Rishabh",
  };
  const token = jwt.sign(payload, "mysecret", { expiresIn: exp || 60 });
  res.json({ jwt: token, exp });
});

app.get("/", (req, res) => {
  res.send("Version: 2");
});
app.listen(8000, () => {
  console.log("SERVER IS LISTENING AT :8000");
});
