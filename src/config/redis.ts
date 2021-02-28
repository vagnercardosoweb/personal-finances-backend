import { RedisOptions } from 'ioredis';

const configRedis = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DATABASE,
} as RedisOptions;

export default configRedis;
