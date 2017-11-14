import React from 'react';

const App = (props) => {
  const { foo, counter, onClick } = props;

  return (
    <div>
      <button onClick={() => onClick()} >{foo} : {counter}</button>
    </div>
  );
};
export default App;
