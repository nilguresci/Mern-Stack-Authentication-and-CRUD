import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbarComponent";
//Routing
import PrivateRoute from "./components/routing/PrivateRoute";

//Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import AddCustomerCard from "./components/screens/AddCustomerCard";
import EditCustComp from "./components/screens/EditCustComp";
import DeleteCustScreen from "./components/screens/DeleteCustScreen";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <PrivateRoute exact path="/addcustomer" component={AddCustomerCard} />
          <Route exact path="/edit/:id" component={EditCustComp} />
          <Route exact path="/delete/:id" component={DeleteCustScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
