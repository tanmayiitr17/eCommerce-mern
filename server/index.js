const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
// app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5175",
    "https://ecommerce-mern-admin.vercel.app",
    "https://ecommerce-mern-client-17.vercel.app"
  ],
  methods: ["GET", "PUT", "POST", "DELETE"]
}));
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5175",
//   "https://ecommerce-mern-admin.vercel.app",
//   "https://ecommerce-mern-client-17.vercel.app"
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ["GET", "PUT", "POST", "DELETE"]
// };

// app.use(cors(corsOptions));

// // Handle preflight requests explicitly
// app.options('*', cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Backend server is running!");
});


app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
