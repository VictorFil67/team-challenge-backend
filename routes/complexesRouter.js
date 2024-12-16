import express from "express";
import authenticate from "../middlewares/authenticate.js";
import complexesControllers from "../controllers/complexesControllers.js";
import { createComplexSchema } from "../schemas/complexSchema.js";
import validateBody from "../decorators/validateBody.js";

const complexesRouter = express.Router();

complexesRouter.use(authenticate);

const { createComplex, updateComplex } = complexesControllers;

complexesRouter.post("/", validateBody(createComplexSchema), createComplex);
complexesRouter.put("/:complexId", updateComplex);

export default complexesRouter;
