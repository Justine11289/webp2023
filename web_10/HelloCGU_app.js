import './App.css';
import multiButton from './cgu_multiButton';
import HelloCGU from './cgu_hello';

function App() {
  return (
    <div className="App">
      <div>{HelloCGU()}</div>
      <div>{multiButton(10)}</div>
    </div>
  );
}

export default App;
