import express from "express";
import path from "path";
import { AppDataSource } from "./database/DataSource";
import bodyParser from "body-parser";
import router from "./routers/TodoRouter";
import { initDependencies } from "./global/dependencies";
import methodOverride from "method-override";



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initDependencies();
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "../src/views"));

app.use("/todos", router);


AppDataSource.initialize()
 .then(() => {
   console.log("Data Source has been initialized!");
   app.listen(3000, () => console.log("Server running on http://localhost:3000"));
 })
 .catch((err) => {
   console.error("Error during Data Source initialization:", err);
 });