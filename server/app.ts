import express from "express";
import cors from "cors";
import { routerApi } from "./router-api";

const app = express();
const port = 4000;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use("/api", routerApi);

app.listen(port, () => {
  console.log(`Admin app listening on port ${port}`);
});
