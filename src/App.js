import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        name:<input type="text" className='name'/>
        <h1>I was changed to feature</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
