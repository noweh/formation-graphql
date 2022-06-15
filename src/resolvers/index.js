import articles from "./query/articles"
import books from "./query/books"
import contents from "./query/contents"
import author from "./content/author"
import authorArticle from "./article/author"

export default {
  Query: {
    books,
    contents,
    articles
  },
  Article: {
    author: authorArticle
  },
  Video: {
    author
  }
}