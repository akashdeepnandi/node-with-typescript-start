import express from 'express';
import { log } from './helpers/logger';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
	log("i logged")
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});