
import './App.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DashboadsMain from './component/DashboadsMain';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Auth from './component/auth/Auth';
import Landing from './component/Landing';
function App() {
  return (
    <>
    <Router>
    
    <Routes>
        <Route path="/*" element={<Landing/>}/>
        <Route path='/dashboard' element={<DashboadsMain/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
