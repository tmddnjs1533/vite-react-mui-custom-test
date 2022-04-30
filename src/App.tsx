import { Header } from 'components/Header';
import Login from './pages/Login';
import { Button } from 'components/Button';
function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Button onClick={() => alert('hola')}>Heyo</Button>
      <Login />
    </div>
  );
}

export default App;
