# formation-graphql

Part I :

fragment MONFRAGMENT on Content {
    title
    ... on Article {
        type
    }
    ... on Video {
        duration
    }
    author {
        name
        id
    }
}

query Contents() {
    contents {
    ...MONFRAGMENT
    }
}

part II :

query Contents($first: Int!, $after: String) {
    articles(first: $first, after: $after) {
        edges {
            node {
                id
                title
                author {
                    id
                    name
                }
            }
        }
    }
}