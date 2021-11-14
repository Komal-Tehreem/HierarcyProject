import logo from './assets/letter-k.png';
import './App.css';
import Organisation from './organisation/Organisation.view';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        Komal's Project
      </header>
      <Organisation />
    </div>
  );
}

export default App;
