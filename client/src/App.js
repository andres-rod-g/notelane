import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from "react-router-dom";
import Start from './components/mainMenu/index'
import WorkSpace from './components/WorkSpace/index'

import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/workspace' element={<WorkSpace/>}/>
      </Routes>
    </div>
  );
}

export default App;
