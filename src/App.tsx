import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Home from './views/Home'
import Admin from './views/Admin';
import Upload from './views/Upload';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
            {/* <Route path="/upload" element={<Upload />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
