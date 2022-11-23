import * as mongoose from 'mongoose';
const Orderschema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    quantity: Number,
    date: Number
})
// schema name should start with a capital letter
// model name should start with a capital letter
// store the model declaration into a variable name and than pass it 

const Mongomodel = mongoose.model("orders") || mongoose.model("orders", Orderschema)
export default Mongomodel

