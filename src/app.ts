import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
