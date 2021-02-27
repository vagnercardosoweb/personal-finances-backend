import '../config/module-alias';

import express from 'express';
import 'express-async-errors';

import appRoutes from '@src/http/routes';

const app = express();
const port = process.env.PORT || 3333;

app.use(appRoutes);

app.listen(port, () => {
  console.log(`🚀 Server started on port http://localhost:${port}`);
});
