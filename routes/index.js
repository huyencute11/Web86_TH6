import { Router } from "express";
import CustomerRouter from "./customer.js";
import OrderRouter from "./order.js";
import { validateApiKey } from "../middlewares/Customer.middleware.js";

const RootRouter = Router();
RootRouter.use('/customers', validateApiKey, CustomerRouter);
RootRouter.use('/orders', OrderRouter);

export default RootRouter;