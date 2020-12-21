import React from 'react';


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
          <a href = {repo.owner.html_url}> {repo.name} </a>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
