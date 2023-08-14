import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_id: Number,
    product_id: Number,
    timestamp: {
        tyepe:Date
    }
});

let Cart = mongoose.model('userClick', cartSchema);

export default Cart;