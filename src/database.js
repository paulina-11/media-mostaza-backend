import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/mostaza", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("La base de datos esta conectada ❤"))
  .catch((err) => console.error(err, "💔"));