import { Header } from 'components/Header';
import Login from './pages/Login';
import { Button } from 'components/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Header title="hola" />
                  <Button onClick={() => alert('hola')}>Heyo</Button>
                </>
              }
            />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
