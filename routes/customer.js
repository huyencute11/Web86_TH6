import { Router } from "express";
import CustomerController from "../controllers/customer.controller.js";

const CustomerRouter = Router();

CustomerRouter.get("/getApikey/:id", CustomerController.getApiKey);
CustomerRouter.get("/" ,CustomerController.getListCustomer);
CustomerRouter.post("/", CustomerController.createNewCustomer);
CustomerRouter.get("/:id", CustomerController.getListCustomerById);
CustomerRouter.get("/:id/orders", CustomerController.getListOrderByCustomerId);

export default CustomerRouter;
