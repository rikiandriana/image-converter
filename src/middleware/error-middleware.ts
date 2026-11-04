import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error.js";

export const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
        return res.status(400).json({
            errors: `Validation Error: ${JSON.stringify(err)}`,
        });
    } else if (err instanceof ResponseError) {
        return res.status(err.status).json({
            errors: err.message,
        });
    } else {
        return res.status(500).json({
            errors: err.message,
        });
    }
};
