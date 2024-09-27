const dotenv = require("dotenv");
const express = require("express");
const connectDb = require("./utils/db")
const cors  = require("cors")
const userRoute = require("./Routes/userRoute")
const voiceRoute = require("./Routes/voiceRoute")

dotenv.config({});
const app = express()

app.get("/", (req, res) => {
  return res.send("Bakchod_Zone Backend");
});

app.use(express.json());
const corsOptions = {
  origin:'http://localhost:5173',
  credentials:true
}

app.use(cors(corsOptions));
const PORT = process.env.PORT || 2000;

app.use('/api/v1/user',userRoute)
app.use('/api/v1/voice',voiceRoute)

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running at port ${PORT}`);
});
