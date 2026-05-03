import { useEffect, useState } from 'react'
import axios from 'axios'

function CustomerList() {
    const [customers, setCustomers] = useState([])

    const fetchCustomers = async () => {
        const res = await axios.get('http://localhost:3000/getAllCustomer')
        setCustomers(res.data)
    }

    const deleteCustomer = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:3000/customers/${id}`)
        fetchCustomers()
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <div className="card shadow p-4">
            <h3 className="mb-4 text-primary">Customer List</h3>

            <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.length > 0 ? (
                            customers.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.phone}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteCustomer(c.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-muted">
                                    No customers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerList