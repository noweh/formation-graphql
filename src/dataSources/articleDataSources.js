import {DataSource} from "apollo-datasource";

export class ArticleDataSources extends DataSource {
  constructor(knexConnection) {
    super()
    this.knex = knexConnection
  }

  initialize(config) {
    this.context = config.context
    this.cache = config.cache
  }

  async getArticles(first, after) {
    const responseCache = await this.cache
      .get('articles:' + first)
      .then((item) => item && JSON.parse(item))

    if (responseCache) {
      return responseCache
    }

    const idAfter = after ? parseInt(after, 10) : 0

    let articles
    if (idAfter === 0) {
      articles = await this.knex
        .select("*")
        .from("articles")
        .limit(first + 1)
        .orderBy("id", "desc")
    } else {
      articles = await this.knex
        .select("*")
        .from("articles")
        .limit(first + 1)
        .where("id", "<", idAfter)
        .orderBy("id", "desc")
    }

    if (articles) {
      await this.cache.set(
        'articles:' + first + ":" + after,
        JSON.stringify(articles),
        { ttl: 10})
    }

    return articles
  }
}