import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to websocketss' });
});

app.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
});
