import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("aready connected");
  } else {
    await mongoose
      .connect(process.env.MONGOURI!)
      .then(() => {
        console.log("db connected");
      })
      .catch(() => {
        console.log("db disconnected");
      });
  }
};
