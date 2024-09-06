require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
// const expressSession = require("express-session");
const morgan = require("morgan");
// const MongoDBStore = require("connect-mongodb-session")(expressSession);
const cookieParser = require("cookie-parser");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// const mongoDBstore = new MongoDBStore({
//   uri: process.env.MONGODB_URL,
//   collection: "myResumerSession",
// });

// app.use(
//   expressSession({
//     secret: "resumer-session-id",
//     name: "resumer-session-id", // cookies name to be put in "key" field in postman
//     store: mongoDBstore,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 0.25, // 3hrs // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
//       sameSite: false,
//       secure: false, // to turn on just in production
//     },
//     resave: true,
//     saveUninitialized: false,
//   })
// );
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/upload"));
app.use("/resume", require("./routes/resumeRouter"));

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
