import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb+srv://ng143499:12345@cluster0.jhxo6dg.mongodb.net/flipkart?retryWrites=true&w=majority`;
    // const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('err: ', error.message);
    }

};

export default Connection;