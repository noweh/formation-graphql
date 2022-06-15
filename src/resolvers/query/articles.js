export const encode = (stringToEncode = "") =>
  Buffer.from(stringToEncode).toString("base64")

export const decode = (stringToDecode = "") =>
  Buffer.from(stringToDecode, "base64").toString()

export default async (_, {first, after}, { dataSources }) => {
  const afterDecoded = after ? decode(after) : null;
  const articles = await dataSources.articleDataSources.getArticles(
    first,
    afterDecoded
  )

  return {
    edges: articles.map((article) => {
      return {
        node: article,
        cursor: encode(article.id.toString())
      }
    }),
    pageInfo: {
      hasNextPage: articles.length > first,
      endCursor: encode(
          articles
            .slice(0, first)
            [articles.slice(0, first).length -1].id.toString()
      )
    }
  }
}