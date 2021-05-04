import { useState } from "react";
import axios from "axios";

const AddCustomerCard = ({ history }) => {
  //

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    if (
      !firstname ||
      !lastname ||
      !companyName ||
      !city ||
      !town ||
      !address ||
      !email ||
      !phone ||
      !sector
    ) {
      alert("Please fill in all fields");
    }

    try {
      console.log("try catch içi");
      const { data } = await axios.post(
        "http://localhost:5000/api/private/addcustomer",
        {
          firstname,
          lastname,
          companyName,
          city,
          town,
          address,
          email,
          phone,
          sector,
        },
        config
      );

      window.location.reload(false);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="addcustomer">
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="col">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="sector">Sector</label>
            <input
              type="text"
              className="form-control"
              id="sector"
              placeholder="Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State</label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              value={town}
              onChange={(e) => setTown(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomerCard;
