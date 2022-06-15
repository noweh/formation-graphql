import { RedisCache as ApolloRedisCache } from "apollo-server-cache-redis";
import RedisCollector from './redis-collector';

export class Redis extends ApolloRedisCache {
  async set(key, value, options) {
    RedisCollector.addData(key, value, options)

    return super.set(key, value, options);
  }

  async get(key) {
    RedisCollector.addData(key)

    return super.get(key);
  }
}