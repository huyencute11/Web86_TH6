import mongoose from "mongoose";

// khởi tạo schema (định nghĩa các field cho các document và kiểu dữ liệu của field đó)
const customerSchema = new mongoose.Schema({
  cusId: {
    type: Number,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  apiKey: String,
});

// định nghĩa model cần truyền với phương thức model và các tham số lần lượt: tên collections, schema của document
const CustomerModel = mongoose.model("customers", customerSchema);
export default CustomerModel;
