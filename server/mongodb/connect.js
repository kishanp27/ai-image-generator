import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url, {useNewUrlParser: true}).then(() => console.log('MongooseDB connected')).catch((e) => console.log(e));
}

export default connectDB