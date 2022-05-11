import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';
import About from './Pages/About';
import Header from './Components/Header';
function App() {
  return (
    <Router>

      <div className="App">
        <ToastContainer  position='top-center'/>
        <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<AddEdit />}></Route>
        <Route path='/update/:id' element={<AddEdit />}></Route>
        <Route path='/view/:id' element={<View />}></Route>

        <Route path='/about' element={<About />}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
