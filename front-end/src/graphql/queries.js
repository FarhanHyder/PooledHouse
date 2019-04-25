// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTipEntry = `query GetTipEntry($id: ID!) {
  getTipEntry(id: $id) {
    id
    user
    shift_length
    shift_time
    shift_date
    shift_position
    takehome
    business_name
    business_street_address
    business_city
    business_state
    business_zip
  }
}
`;
export const listTipEntrys = `query ListTipEntrys(
  $filter: ModelTipEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listTipEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      shift_length
      shift_time
      shift_date
      shift_position
      takehome
      business_name
      business_street_address
      business_city
      business_state
      business_zip
    }
    nextToken
  }
}
`;
