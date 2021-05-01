const express=require('express')
const router=express.Router();
const {getPrivateData,getUsers,getCustomers,addCustomer,getOneCustomer,updateCustomer, deleteCustomer}= require('../controllers/private')
const {protect} = require('../middleware/auth')

router.route('/').get(protect , getPrivateData);

router.route('/getUsers').get(protect , getUsers);

router.route('/customers').get( getCustomers);

router.route('/customer/:id').get(protect,getOneCustomer)

router.route('/addcustomer').post(addCustomer)

router.route('/update/:id').patch(updateCustomer)

router.route('/delete/:id').delete(deleteCustomer)

module.exports=router;