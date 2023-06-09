const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const foodRoute=require("./routes/food");
const swagsRoute=require("./routes/swags");
const stationeryRoute=require("./routes/stationery");
const sportsRoute=require("./routes/sports");
const miscellaneousRoute=require("./routes/miscellaneous");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const stripeRoute=require("./routes/stripe");

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successfull!"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/foods", foodRoute);
app.use("/api/swags", swagsRoute);
app.use("/api/stationery", stationeryRoute);
app.use("/api/sports", sportsRoute);
app.use("/api/miscellaneous", miscellaneousRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});