import {  Types } from "mongoose";

export type TOrder =

// extends Document 
 {
  user: Types.ObjectId;
  email:string;
  cars:{
    car: Types.ObjectId;
    quantity:number;
    _id?: Types.ObjectId;
  }[],
  totalPrice?: number,
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled",
  transaction: {
   id: string,
   transactionStatus: string,
   bank_status: string,
   sp_code: string,
   sp_message: string,
   method: string,
   date_time: string,
 },
  createdAt?: Date;
  updatedAt?: Date;
};
