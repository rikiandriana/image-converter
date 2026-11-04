import { ZodType } from "zod";

export class Validation {
    static validate<T>(schema: ZodType, request: T): T {
        return schema.parse(request) as T;
    }
}
