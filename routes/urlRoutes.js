import { express } from "express"
import { Router } from "express"

const router = Router();

router.route("/url").post(handleGenerateNewShortUrl)