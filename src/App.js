import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/create'} element={<CreateEvent/>}/>
        <Route path={'/event'} element={<Event/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
