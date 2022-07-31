import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './components/DisplayData';
import Movie from './components/Movie';
import CreateUser from './components/CreateUser';
import { useState } from 'react';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  const [refetch, setRefetch] = useState(false);
  return (
    <ApolloProvider client={client}>
      <CreateUser setRefetch={setRefetch} />
      <DisplayData refetch={refetch} />
      <Movie />
    </ApolloProvider>
  );
}

export default App;
