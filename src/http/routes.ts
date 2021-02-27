import { Router } from 'express';

const appRoutes = Router({ mergeParams: true });

appRoutes.get('/', (_, response) => response.sendStatus(200));

export default appRoutes;
