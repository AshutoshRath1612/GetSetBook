import {BrowserRouter ,Route ,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import List from './Pages/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hotels' element={<List />}></Route>
          <Route path='/hotels/:id' element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
