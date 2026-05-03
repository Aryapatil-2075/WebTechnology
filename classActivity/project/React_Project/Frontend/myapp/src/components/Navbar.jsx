import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded px-3 mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    Customer Manager
                </Link>

                <div className="navbar-nav ms-auto">
                    <Link className="nav-link text-white" to="/">
                        Customers
                    </Link>
                    <Link className="nav-link text-white" to="/add">
                        Add Customer
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar