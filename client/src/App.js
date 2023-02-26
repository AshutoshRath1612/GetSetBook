import {BrowserRouter ,Route ,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hotels' element={<List />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/hotels/:id' element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
