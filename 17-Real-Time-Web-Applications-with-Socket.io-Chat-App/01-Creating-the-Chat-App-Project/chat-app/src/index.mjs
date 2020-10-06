import express from 'express';
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicDirectoryPath));
app.listen(port, ()=>{
  console.log(`Server is up on port ${port}!`);
});
