export default(parent, args, context, info) => {
  return [
    {
      __typename: "Article",
      id: "123",
      title: "test",
      author: {
        id: "111",
        name: "Toto"
      },
      type: "LONG"
    },
    {
      __typename: "Video",
      id: "111",
      title: "ma vidéo",
      author: {
        id: "111",
        name: "toto"
      },
      duration: 123
    }
  ]
}