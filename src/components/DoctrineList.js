import React from 'react';

import {
  gql,
  graphql
} from 'react-apollo';

const doctrineListQuery = gql`
  query DoctrineListQuery {
    doctrines {
      id
      name
      tags
    }
  }
`;


const DoctrineList = ({data: {loading, error, doctrines}}) => {
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <div>
        <ul>
            {doctrines.map(d => <li key={d.id}>{d.name} ({d.tags.join(" ")})</li>)}
        </ul>
    </div>
  );
}

export default graphql(doctrineListQuery)(DoctrineList);