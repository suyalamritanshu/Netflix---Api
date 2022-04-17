const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DbConnect = require('./database');
const PORT = process.env.PORT || 4000;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();

//Database Connection

DbConnect();
app.use(express.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested, Content-Type, Accept Authorization"
//     )
//     if (req.method === "OPTIONS") {
//       res.header(
//         "Access-Control-Allow-Methods",
//         "POST, PUT, PATCH, GET, DELETE"
//       )
//       return res.status(200).json({})
//     }
//     next()
//   })


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});