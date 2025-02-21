import express from "express";
import authenticate from "../middlewares/authenticate.js";
import complexesControllers from "../controllers/complexesControllers.js";
import {
  createComplexSchema,
  updateComplexSchema,
} from "../schemas/complexSchema.js";
import validateBody from "../decorators/validateBody.js";

const complexesRouter = express.Router();

// complexesRouter.use(authenticate);

const { createComplex, updateComplex, getComplexes, getComplex } =
  complexesControllers;

complexesRouter.post(
  "/",
  authenticate,
  validateBody(createComplexSchema),
  createComplex
);
complexesRouter.put(
  "/:complexId",
  authenticate,
  validateBody(updateComplexSchema),
  updateComplex
);
complexesRouter.get("/", getComplexes);
complexesRouter.get("/:complexId", getComplex);

export default complexesRouter;
