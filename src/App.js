import logo from './logo.svg';
import './App.css';
import './component/Landing'
import Landing from './component/Landing';
import Nav from './component/Nav';
import User from './component/User';
import EcoForm from './component/EcoForm';

function App() {
  return (
    <div className="App">
      <div><Landing /></div>
      <div><Nav /></div>
      <div><User /></div>
      <div><EcoForm /></div>
    </div>
  );
}

export default App;
