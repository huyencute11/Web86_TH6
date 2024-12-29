import mongoose from "mongoose";

// khởi tạo schema (định nghĩa các field cho các document và kiểu dữ liệu của field đó)
const orderSchema = new mongoose.Schema({
  cusId: Number,
  orderId: {
    type: Number,
    unique: true,
  },
  quantity: Number,
  totalPrice: Number,
});

// định nghĩa model cần truyền với phương thức model và các tham số lần lượt: tên collections, schema của document
const OrderModel = mongoose.model("orders", orderSchema);
export default OrderModel;
