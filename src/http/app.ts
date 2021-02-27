import '../config/dotenv';
import '../config/module-alias';

import express from 'express';
import 'express-async-errors';
import * as http from 'http';

import appRoutes from '@src/http/routes';

class App {
  protected app: express.Application;
  protected server: http.Server;
  protected port: number;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = Number(process.env.PORT || 3333);

    this.app.set('trust proxy', true);
    this.app.set('x-powered-by', false);

    this.registerMiddlewares();
  }

  protected registerMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(appRoutes);
  }

  public async startServer(): Promise<http.Server> {
    return new Promise(resolve => {
      this.server.listen(this.port, () => resolve(this.server));
    });
  }

  public async closeServer(): Promise<void> {
    await new Promise((resolve, reject) => {
      this.server.close(err => {
        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  public getServer(): http.Server {
    return this.server;
  }

  public getInstance(): express.Application {
    return this.app;
  }
}

export default new App();
