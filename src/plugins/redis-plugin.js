import RedisCollector from './redis-collector';

export default {
  requestDidStart() {
    return {
      willSendResponse(requestContext) {
        const redisExtension = {
          key: RedisCollector.key,
          value: RedisCollector.queries.length,
          options: RedisCollector.queries,
        };

        // eslint-disable-next-line no-param-reassign
        requestContext.response.extensions = { ...requestContext.response.extensions, redisExtension };

        RedisCollector.reset();
      },
    };
  },
};