import { Buffer } from "buffer";
import type { FormatTarget } from "../model/convert-model.js";
import { Validation } from "../validation/validation.js";
import { ConvertValidation } from "../validation/convert-validation.js";
import sharp from "sharp";

export class ConvertService {
    static async convert(buffer: Buffer, targetFormat: FormatTarget, quality: number = 80) {
        const request = Validation.validate(ConvertValidation.convert, { buffer, target: targetFormat, quality });
        const image = sharp(request.buffer);
        await image.metadata();
        return image.toFormat(request.target, { quality }).toBuffer();
    }
}
