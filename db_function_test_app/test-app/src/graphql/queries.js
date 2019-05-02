// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPerson = `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    name
  }
}
`;
export const listPersons = `query ListPersons(
  $filter: ModelpersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
    }
    nextToken
  }
}
`;
