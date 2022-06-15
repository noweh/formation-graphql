export default async (_, {first, after}, { dataSources }) => {
  const articles = await dataSources.articleDataSources.getArticles(first)

  return {
    edges: articles.map((article) => {
      return {
        node: article
      }
    })
  }
}