import cors from 'cors';
import express from 'express';

import { routerApi } from './router-api';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routerApi);

app.listen(port, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Admin app listening on port ${port}`);
});
