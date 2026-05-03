import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddCustomer from './components/AddCustomer'
import CustomerList from './components/CustomerList'

function App() {
  return (
    <div className="container mt-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add" element={<AddCustomer />} />
      </Routes>
    </div>
  )
}

export default App