import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    prodname: { type: String },
    prodbrand: { type: String },
    prodseller: { type: String },
    prodprice: { type: Number },
    prodslug: { type: String },

});

export default ProductSchema;