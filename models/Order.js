import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    apartment:{
      type: String,
      required: false
    },
    city:{
      type: String,
      required: true
    },
    postal:{
      type:Number,
      required: false,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    phoneNumber:{
        type: Number,
        required: true,
        maxlength: 20,
    },
    itemName:{
      type: String,
      required: true
    },
    itemQty:{
      type: Number,
      required: true
    },
    itemPrice:{
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    news:{
      type: String,
       required: false
    }

  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);