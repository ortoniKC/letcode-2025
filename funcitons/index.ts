import * as functions from "firebase-functions";
import express from "express";
import { join } from "path";

const app = express();
const DIST_FOLDER = join(process.cwd(), "../dist/letcode/browser");
const server = require("../dist/letcode/server/main");

app.use(express.static(DIST_FOLDER));
app.get("*", server.app);

export const ssr = functions.https.onRequest(app);
