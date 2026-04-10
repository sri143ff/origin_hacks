import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import jobRoutes from "./routes/jobRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/jobs", jobRoutes);

// Serve static files from the React app
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// For any other request that isn't an API call, send back index.html
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});