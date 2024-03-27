# Mutations

Import a competition:

```graphql
mutation AddCompetition {
    addCompetition(id: "2016") {
        id
        name
        code
        areaName
    }
}
```