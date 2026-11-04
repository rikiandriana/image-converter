import { Router } from "express";
import { multerMiddleware } from "../middleware/multer-middleware.js";
import { ConvertController } from "../controller/convert-controller.js";

const publicRouter = Router();
publicRouter.post("/api/convert", multerMiddleware.single("image"), ConvertController.convert);

export { publicRouter };
