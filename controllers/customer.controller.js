import Customer from "../models/Customer.js";
import OrderModel from "../models/Order.js";
import { generateRandomString } from "../utils/common.js";
// get list customers
const CustomerController = {
  // get api key
  getApiKey: async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findOne({ cusId: id });
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      console.log("🚀 ~ getApiKey: ~ apiKey:", customer);
      const randomString = generateRandomString(8);
      const apiKey = `web-$${customer.cusId}$-$${customer.email}$-$${randomString}$`;
      // update customer add field apikey to database

      await Customer.updateOne({ cusId: id }, { $set: { apiKey: apiKey } });

      res.status(200).send({
        data: apiKey,
        message: "generate apiKey successful!",
        success: true,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },

  getListCustomer: async (req, res) => {
    try {
      const customers = await Customer.find({});
      //   res.json(customers);
      if (!customers) throw new Error("User not found!");

      res.status(200).send({
        data: customers,
        message: "Get customer successful!",
        success: true,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },
  getListCustomerById: async (req, res) => {
    try {
      const { id } = req.params;
      const customerDetail = await Customer.find({ cusId: id });

      if (!customerDetail) throw new Error("User not found!");

      res.status(200).send({
        data: customerDetail,
        message: "Get customer successful!",
        success: true,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },
  // create new customer
  createNewCustomer: async (req, res) => {
    try {
      const { cusId, name, email, age } = req.body;
      if (!cusId) throw new Error("cusId is required!");
      if (!name) throw new Error("name is required!");
      if (!email) throw new Error("email is required!");
      if (!age) throw new Error("age is required!");

      const createdCustomer = await Customer.create({
        cusId,
        name,
        email,
        age,
      });
      res.status(201).send({
        data: createdCustomer,
        message: "Register successful!",
        success: true,
      });
    } catch (error) {
      res.status(403).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },

  //   3. Lấy danh sách đơn hàng của một khách hàng cụ thể
  // Viết API để lấy danh sách các đơn hàng của một khách hàng cụ thể dựa trên customerId.
  // Endpoint: GET /customers/:customerId/orders
  getListOrderByCustomerId: async (req, res) => {
    try {
      const { id } = req.params;
      const orders = await OrderModel.find();
      const listOrder = orders.filter((item) => item.cusId == id);
      console.log("🚀 ~ getListOrderByCustomerId: ~ customerId:", id);

      if (!listOrder) throw new Error("Order not found!");

      res.status(200).send({
        data: listOrder,
        message: "Get order successful!",
        success: true,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },
};

export default CustomerController;
