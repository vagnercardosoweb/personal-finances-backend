import '../config/module-alias';
import { AddressInfo } from 'net';

import logger from '@src/config/logger';
import app from '@src/http/app';

(async () => {
  try {
    const server = await app.startServer();
    const { port } = server.address() as AddressInfo;

    logger.info(`🚀 Server started on port http://localhost:${port}`);
  } catch (e) {
    await app.closeServer();

    logger.error(`Server initialization failed: ${e.message}`);
    process.exit(0);
  }
})();
