import { Link } from "react-router-dom";

const navbarComponent = ({ history }) => {
  const logoutHandler = (e) => {
    localStorage.removeItem("authToken");
  };

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <a className="navbar-brand" href="#">
        Software Arge Customers
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addcustomer" className="nav-link">
              Add customer
            </Link>
          </li>

          {localStorage.getItem("authToken") && (
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default navbarComponent;
