# Queries

Get Player by ID:
```graphql
query Player {
  player(id: 4477) {
    id
    name
    position
    dateOfBirth
    nationality
    teamId
    team {
      id
      name
      tla
      shortName
      areaName
      address
    }
  }
}
```

List Players:
```graphql
query Players {
  players(page: 1, pageSize: 15) {
    id
    name
    position
    dateOfBirth
    nationality
    teamId
    team {
      id
      name
      tla
      shortName
      areaName
      address
    }
  }
}
```

Get Coach by ID:
```graphql
query Coach {
  coach(id: "5231") {
    id
    name
    dateOfBirth
    nationality
    teamId
    team {
      id
      name
      shortName
      areaName
      address
    }
  }
}
```

List Coaches:

```graphql
query Coaches {
  coaches(pageSize: 10, page: 1) {
    id
    name
    dateOfBirth
    nationality
    teamId
    team {
      id
      name
      shortName
      areaName
      address
    }
  }
}
```

Get Team by ID:
```graphql
query Team {
    team(id: "1") {
        id
        name
        tla
        shortName
        areaName
        address
    }
}
```

List Teams:
```graphql
query Teams {
    teams(page: 1, pageSize: 10) {
        id
        name
        tla
        shortName
        areaName
        address
    }
}
```

Get Competition by ID:
```graphql
query Competition {
    competition(id: "1") {
        id
        name
        code
        areaName
    }
}
```

List Competitions:
```graphql
query Competitions {
    competitions(pageSize: 10, page: 1) {
        id
        name
        code
        areaName
    }
}
```