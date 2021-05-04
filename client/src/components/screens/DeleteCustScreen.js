import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteCustScreen = ({ history, match }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/private/customer/${match.params.id}`,
          config
        );

        setFirstname(data.firstname);
        setLastname(data.lastname);
        setCompanyName(data.companyName);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchData();
  }, [history]);

  const onDelete = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/private/delete/${match.params.id}`,
        config
      );
      setFirstname("");
      setLastname("");
      setCompanyName("");
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div class="alert alert-warning" role="alert">
      <div class="row">
        <div className="col-6">
          <h4 class="alert-heading">This customer will be deleted!</h4>
          <p>Are you sure you want to delete this customer?</p>
        </div>
        <div className="col-6">
          <h5>Customer</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-warning">
              {firstname} {lastname}
            </li>
            <li class="list-group-item list-group-item-warning">
              {companyName}
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div class="row">
        <div className="col-6">
          <Link to="/" className="btn btn-success btn-lg">
            Go back
          </Link>
        </div>
        <div className="col-6">
          <button
            type="button"
            class="btn btn-danger btn-lg"
            onClick={onDelete}
          >
            Delete customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustScreen;
