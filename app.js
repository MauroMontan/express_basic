import express, { json } from "express";

const app = express();

const PORT = 3030;

app.use(json());

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/explorer", (_, res) => {
  res.json({
    explorer: "Mauro",
    msg: "Hello",
  });
});

app.get("/explorer/:id", (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`app listenning on port ${PORT}`);
});
