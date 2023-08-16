import React from 'react';

function EventHandler() {
  const handleClick = (event) => {
    console.log('Clicked!', event);
  };

  return (
    <button onClick={handleClick}>
      Click me to see the event object in console log
    </button>
  );
}

export default EventHandler;
