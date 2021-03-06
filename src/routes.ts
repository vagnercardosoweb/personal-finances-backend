import { Router } from 'express';

import authRoutes from '@src/modules/authentication/routes';
import commonRoutes from '@src/modules/common/routes';
import swaggerRoutes from '@src/modules/swagger';

const appRoutes = Router();

appRoutes.use(commonRoutes);
appRoutes.use('/auth', authRoutes);
appRoutes.use('/docs', swaggerRoutes);

export default appRoutes;
