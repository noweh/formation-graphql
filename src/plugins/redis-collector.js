class RedisCollector {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    this.queries = [];
  }

  reset() {
    this.initializeData();
  }

  addData(key, value = null, options = null) {
    this.queries.push({
      key,
      value,
      options
    });

    return this;
  }

  static getInstance() {
    if (!RedisCollector.instance) {
      RedisCollector.instance = new RedisCollector();
    }

    return RedisCollector.instance;
  }
}

export default RedisCollector.getInstance();