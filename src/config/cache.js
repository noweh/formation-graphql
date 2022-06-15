import{ Redis as ApolloRedisCache } from "../plugins/redis";

const redisOptions ={
  host: "localhost",
};

export const redisCache= new ApolloRedisCache(redisOptions);