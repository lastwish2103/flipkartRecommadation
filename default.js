

import Product from './model/productSchema.js';
import { products } from './constants/product.js';
// const Product = require("./model/productSchema.js") 
const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;