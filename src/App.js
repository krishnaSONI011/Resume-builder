
import './App.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DashboadsMain from './component/DashboadsMain';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Auth from './component/auth/Auth';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/dashboard' element={<DashboadsMain/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
