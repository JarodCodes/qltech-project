import gql from 'graphql-tag';

export const GET_GAMES = gql`
  query GetGames {
  games {
    id
    description
    name
  }
  }
`;