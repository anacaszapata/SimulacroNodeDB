const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000
        })
            .then(() => console.log('MongoDB connected'))
            .catch((err) => console.log(err));
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}


module.exports = connectDB