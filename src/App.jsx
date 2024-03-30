import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRegister from './Components/Authentication/AdminRegister'
import LoginComponent from './Components/Authentication/LoginComponent'
import Home from './Home'
import LeedsList from './Components/Leeds/LeedsList'
import Dashboard from './Components/Pages/Dashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/login" element={<LoginComponent />} />

          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="leeds" element={<LeedsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
