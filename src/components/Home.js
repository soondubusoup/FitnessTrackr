import React from "react";

const Home = ({ user, token }) => {
  return (
    <>
      <h1>
        
        <br />
        <br />
        {token ? (
          <span>You are logged in as {user.username}</span>
        ) : (
          "Hi friend (: 9"
        )}
      </h1>
    </>
  );
};

export default Home;
