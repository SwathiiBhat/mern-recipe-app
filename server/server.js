import app from "./app.js";
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ DB connection successful");
}).catch((err) => {
  console.error("❌ DB connection error:", err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 SERVER RUNNING ON PORT: ${PORT}`);
});
