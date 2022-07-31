import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { IUsersData, IUsersVars } from '../interfaces';

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      age
      id
      username
      nationality
      friends {
        name
      }
    }
  }
`;

type DisplayDataProps = {
  refetch: boolean;
};

const DisplayData: React.FC<DisplayDataProps> = ({ refetch }) => {
  const {
    data,
    loading,
    error,
    refetch: refetchData,
  } = useQuery<IUsersData, IUsersVars>(QUERY_ALL_USERS);
  useEffect(() => {
    refetchData();
  }, [refetch]);
  return (
    <div>
      {data &&
        data.users.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Nationality: {user.nationality}</h1>
          </div>
        ))}
    </div>
  );
};

export default DisplayData;
