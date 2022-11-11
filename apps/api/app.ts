
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import errors from "./src/utils/error/errorHandler.middlerware";
import swagger from "./src/utils/swagger-docs/swagger.middleware";
import passport from "passport";
import cookieSession from "cookie-session";
import { cookiesConfigs, corsConfigs } from "./src/utils/configs/configs";
import uploadRouter from "./src/utils/media/upload.media";
import i18nextMiddleware from "./src/utils/localization/localization.middleware";

// ------------------------------------------------------

// Auth
import authRouter from "./src/utils/auth/auth.router";
import passportAuthenticate from "./src/utils/auth/auth.middleware";

// ------------------------------------------------------

// Entities controllers imports
import trainingcoursesController from "./src/entities/trainingcourses/trainingcourses.controller";
import trainersController from "./src/entities/trainers/trainers.controller";
import trainingqualificationsController from "./src/entities/trainingqualifications/trainingqualifications.controller";
import blankevaluationformController from "./src/entities/blankevaluationform/blankevaluationform.controller";
import evaluationformsController from "./src/entities/evaluationforms/evaluationforms.controller";
import evaluationquestionsController from "./src/entities/evaluationquestions/evaluationquestions.controller";
import evaluationanswersController from "./src/entities/evaluationanswers/evaluationanswers.controller";


// ------------------------------------------------------

const app = express();

// ------------------------------------------------------

// Middlewares ( web )
app.use(i18nextMiddleware);
app.use(cors(corsConfigs));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieSession(cookiesConfigs));
app.use(passport.initialize());
app.use(passport.session());

// ------------------------------------------------------

// Static Files ( Uploaded Images )
app.use("/assets", express.static(path.join(__dirname, "/assets")));

// ------------------------------------------------------

// Swagger Documentaion Middleware
app.use("/api-docs", swagger.server, swagger.setup); // Docs

// ------------------------------------------------------

// Auth Router ( login / register / ...)
app.use(authRouter);

// Auth Passport Protect Middleware
// app.use(passportAuthenticate(passport));

// ------------------------------------------------------

// Entities contollers use
app.use(trainingcoursesController)
app.use(trainersController)
app.use(trainingqualificationsController)
app.use(blankevaluationformController)
app.use(evaluationformsController)
app.use(evaluationquestionsController)
app.use(evaluationanswersController)


// ------------------------------------------------------

// Upload Media Files
app.use(uploadRouter);

// ------------------------------------------------------

// Error Handlers
app.use(errors.catchNotFound);
app.use(errors.errorHandler);

//---------------------------------------------------

export default app;