import multer from "multer";
import { ResponseError } from "../error/response-error.js";

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];

const storage = multer.memoryStorage();
export const multerMiddleware = multer({
    storage,
    limits: { fileSize: 25 * 1024 * 1024, files: 1 },
    fileFilter: (req, file, cb) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cb(new ResponseError(400, "Unsupported image format"));
        }

        cb(null, true);
    },
});
