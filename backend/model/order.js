const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
order:[{
    productName:{
        type:String,
        },
        price:{
            type:Number,
        }
}],
totalPrice:{
type:Number,
}
})

module.exports = mongoose.model("Order", orderSchema)