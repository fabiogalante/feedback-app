import React from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

// function App() {
//     return React.createElement('div', { className: 'container'}, React.createElement('h1', {}, 'My App'))
// }

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App;
