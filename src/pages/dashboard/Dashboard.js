import React from 'react';

const Dashboard = ({user}) => {
  return (
    <div>
        <h2>Hello, {user?.name}</h2>
    </div>
  );
}

export default Dashboard;
