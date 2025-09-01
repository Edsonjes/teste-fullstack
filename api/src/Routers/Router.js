import { Router } from "express";
import ServiceApi from "./ServiceApiRoute.js"; 

const router = Router();

router.use("/api", ServiceApi);

export default router;