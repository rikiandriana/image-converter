import z, { ZodType } from "zod";
import { Buffer } from "buffer";

export class ConvertValidation {
    static convert: ZodType = z.object({
        buffer: z.instanceof(Buffer),
        target: z.enum(["jpeg", "png", "webp", "avif"]),
        quality: z.number().min(1).max(100).optional(),
    });
}
