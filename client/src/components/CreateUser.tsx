import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { IUser, IUserDetails } from '../interfaces';

const QUERY_CREATE_USER = gql`
  mutation createUser($input: AddUserInput!) {
    addUser(input: $input) {
      id
      name
      username
      nationality
    }
  }
`;

type CreateUserProps = {
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateUser: React.FC<CreateUserProps> = ({ setRefetch }) => {
  const [user, setUser] = useState<IUserDetails>({
    name: '',
    username: '',
    age: 0,
    nationality: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const [createUser, { data }] = useMutation<
    {
      createUser: IUser;
    },
    {
      input: IUserDetails;
    }
  >(QUERY_CREATE_USER, {
    variables: {
      input: {
        ...user,
        age: +user.age,
      },
    },
  });
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nationality"
          value={user.nationality}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            createUser();
            setRefetch((prevState) => !prevState);
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
