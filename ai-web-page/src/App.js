
import React from 'react';

const App = () => {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={() => handleButtonClick('https://example.com')}>
        Go to Example.com
      </button>
      <button onClick={() => handleButtonClick('https://google.com')}>
        Go to Google
      </button>
      <button onClick={() => handleButtonClick('https://github.com')}>
        Go to GitHub
      </button>
    </div>
  );
};

export default App;