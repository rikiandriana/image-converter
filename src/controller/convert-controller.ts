import type { NextFunction, Request, Response } from "express";
import { ConvertService } from "../service/convert-service.js";
import type { FormatTarget } from "../model/convert-model.js";
import { ResponseError } from "../error/response-error.js";

export class ConvertController {
    static async convert(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.file) {
                throw new ResponseError(400, "Image is required");
            }

            const buffer: Buffer = req.file.buffer;
            const formatTarget: FormatTarget = req.body.format as FormatTarget;
            const quality: number = Number(req.body.quality);
            const response = await ConvertService.convert(buffer, formatTarget, quality);

            res.status(200)
                .type(`image/${formatTarget}`)
                .attachment(`converter.${formatTarget === "jpeg" ? "jpg" : formatTarget}`)
                .send(response);
        } catch (e) {
            next(e);
        }
    }
}
