const Order = require("../model/order")

exports.create = async(req,res)=>{
try{
    const {order} = req.body;

    let totalPrice = 0;

    order.forEach((order)=>{
        totalPrice+=order.price
    })
    await Order.create({
        order:order,
        totalPrice:totalPrice
    })
    return res.status(400).json({status:true,message:"Order Created Successfully"})
}catch(e){
    console.log(e)
    return res.status(400).json({status:false,message:"Something Went wrong"})
}
}