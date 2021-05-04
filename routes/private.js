const express = require("express");
const router = express.Router();
const {
  getPrivateData,
  getUsers,
  getCustomers,
  addCustomer,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/private");
const { protect } = require("../middleware/auth");

//router.route('/').get(getPrivateData);

router.route("/getUsers").get(protect, getUsers);

router.route("/").get(protect, getCustomers);

router.route("/customer/:id").get(protect, getOneCustomer);

router.route("/addcustomer").post(protect, addCustomer);

router.route("/edit/:id").patch(protect, updateCustomer);

router.route("/delete/:id").delete(protect, deleteCustomer);

module.exports = router;
