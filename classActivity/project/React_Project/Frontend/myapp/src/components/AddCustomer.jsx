import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddCustomer() {
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3000/addCustomer', customer)
        navigate('/')
    }

    return (
        <div className="card shadow p-4">
            <h3 className="mb-4 text-primary">Add Customer</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={customer.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Enter Phone"
                        value={customer.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" onSubmit={() => handleSubmit()} className="btn btn-primary">

                    Add Customer
                </button>
            </form>
        </div>
    )
}

export default AddCustomer