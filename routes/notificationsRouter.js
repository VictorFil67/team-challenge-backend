import express from "express";
import authenticate from "../middlewares/authenticate.js";
import notificationsControllers from "../controllers/notificationsControllers.js";
import validateBody from "../decorators/validateBody.js";
import { notificationsSchema } from "../schemas/notificationsSchema.js";
import isValidId from "../middlewares/isValidId.js";

const notificationsRouter = express.Router();

notificationsRouter.use(authenticate);

const { createNotification, getNotifications, removeNotification } =
  notificationsControllers;

notificationsRouter.post(
  "/:residential_complex_id",
  validateBody(notificationsSchema),
  isValidId,
  createNotification
);
notificationsRouter.get(
  "/:residential_complex_id",
  isValidId,
  getNotifications
);
notificationsRouter.delete("/:_id", isValidId, removeNotification);

export default notificationsRouter;
