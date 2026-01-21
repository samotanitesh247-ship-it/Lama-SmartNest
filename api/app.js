import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

// Load environment variables
console.log("Hello")
dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: 'https://your-frontend-app.vercel.app', // Replace with your Vercel URL
  methods: 'GET,POST,PUT,DELETE', // Allow only specific methods as per your needs
  credentials: true, // Include cookies if needed for session handling
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Start server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
