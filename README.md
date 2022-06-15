# formation-graphql

Part I :

Operation:
```
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
```

part II :

Operation:
```
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
```

part III :

Operation:
```
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
        pageInfo {
            hasNextPage
            endCursor
        }
    }
}
```

Variables:
```
{
    "first": 1,
    "after": null
}
```