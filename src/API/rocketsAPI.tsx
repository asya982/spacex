import { gql } from "@apollo/client";

export const GET_ALL_ROCKETS = gql`
  query GetAllRockets {
    rockets {
      id
      description
      name
    }
  }
`;
