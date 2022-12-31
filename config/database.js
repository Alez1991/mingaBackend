import mongoose from "mongoose";

const options={
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.mongo_uri, options)
.then(()=> console.log('Database connected'))
.catch(err => console.log(err))