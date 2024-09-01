import express from "express";
import { fetch, create, update, remove} from "../controller/foodControl.js";

const route = express.Router();
route.post("/create", create);
route.get("/fetch", fetch);
route.put("/update/:id", update); 
route.delete("/delete/:id", remove);
export default route;
