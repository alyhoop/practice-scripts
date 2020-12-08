import './App.css';

function App() {
  const user = ''
  return (
    <div className="book">
      <div className="title">
      {user ? 'hello' : 'not logged in'}
      <br />
        Title
      </div>
      <div className="author">
        Author
      </div>
      <ul className="info">
        <li className="rating">
          5 Stars
        </li>
        <li className="ibsn">
          123-45677-29
        </li>
      </ul>
    </div>
  );
}

export default App;
