const { Router } = require("express");
const {
  getAnswer,
  putAnswer,
  postAnswer,
  deleteAnswer,
} = require("../controllers/user");

const router = Router();

router.get("/", getAnswer);

router.put("/:id", putAnswer);

router.post("/", postAnswer);

router.delete("/", deleteAnswer);

module.exports = router;
