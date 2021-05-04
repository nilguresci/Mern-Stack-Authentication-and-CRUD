import { useState, useEffect } from "react";
import axios from "axios";
import CustomersComp from "./customersComponent";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    /* if(!localStorage.getItem("authtoken")){
            history.push('/login')
          }   */

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/private",
          config
        );
        setCustomerData(data);
        console.log("private data", data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, [history]);

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <br />
      <div class="row">
        {customerData.map((customer) => (
          <div className="col">
            {" "}
            <CustomersComp key={customer.id} customer={customer} />{" "}
          </div>
        ))}
      </div>

      <br />
    </>
  );
};

export default PrivateScreen;
