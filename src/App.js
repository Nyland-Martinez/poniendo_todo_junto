
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname="John" lastname="Smith" age={65} hairColor="negro" gender="male" />
      <PersonCard firstname="Jane" lastname="Doe" age={25} hairColor="castaño" gender="female" />
    </div>
  );
}

export default App;
