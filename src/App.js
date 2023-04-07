import './App.css';
import Navbar from "./components/navbar/navbar";
import Screen from './components/screen/screen'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddAdvent from "./components/addAdvent/addAdvent";
import Login from "./components/login/login";
import TestMap from "./components/testMap/testMap";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="row">
                  <Routes>
                      <Route path='/mainScreen' element={<Screen/>}/>
                      <Route path='/profile' element={<Login/>}/>
                      <Route path='/addAdvent' element={<AddAdvent/>}/>
                      {/*<Route path='/mapTest' element={<TestMap/>}/>*/}
                  </Routes>
                  <Navbar/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
