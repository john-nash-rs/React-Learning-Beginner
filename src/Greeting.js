import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h3>Welcome to our React Course, {props.name}!</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default Greeting;
