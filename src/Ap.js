import React from 'react';

// function App() {
//     return React.createElement('div', { className: 'container'}, React.createElement('h1', {}, 'My App'))
// }

function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';

  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
    { id: 4, text: 'Comment four' },
    { id: 5, text: 'Comment five' },
  ];

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>

      <div className='comments'>
          <h3>comments ({comments.length})</h3>
          <ul> 
              {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
              ))}
          </ul>

      </div>
    </div>
  );
}

export default App;
