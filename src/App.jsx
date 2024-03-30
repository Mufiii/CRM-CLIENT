import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRegister from './Components/Authentication/AdminRegister'
import LoginComponent from './Components/Authentication/LoginComponent'
import Home from './Home'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
