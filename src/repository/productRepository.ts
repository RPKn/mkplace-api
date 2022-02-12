import * as mongoose from 'mongoose';
import ProductSchema from '../models/productSchema';

export default mongoose.model("products", ProductSchema);
