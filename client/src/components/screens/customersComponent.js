import { Link } from "react-router-dom";

const customersComponent = ({ customer }) => {
  return (
    <div className="container">
      <div class="row">
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">
                {customer.firstname} {customer.lastname}
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Company: {customer.companyName} </li>
              <li class="list-group-item">Sector: {customer.sector}</li>
              <li class="list-group-item">City: {customer.city}</li>
              <li class="list-group-item">State: {customer.town}</li>
              <li class="list-group-item">Email: {customer.email}</li>
              <li class="list-group-item">Phone number: {customer.phone}</li>
            </ul>

            <div class="card-body">
              <p class="card-text">{customer.address}</p>
              <a class="card-link" key={customer._id}>
                {" "}
                <Link to={`/edit/${customer._id}`}>Edit Customer</Link>{" "}
              </a>
              <a>
                {" "}
                <Link to={`/delete/${customer._id}`}>Delete Customer</Link>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default customersComponent;
