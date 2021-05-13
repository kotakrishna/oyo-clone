import mongoose from "mongoose";
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  // .then((re) => console.log("connected ----", re))
  // .catch((er) => console.log("the total", er));
};

export default dbConnect;
