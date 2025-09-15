const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const articleRoutes = require("./routes/article.routes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Tasks API → http://localhost:${PORT}/api/`));
