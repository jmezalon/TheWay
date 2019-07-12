const express = require("express");
const router = express.Router();
const {
  getAllChurches,
  getSingleChurch,
  deleteChurch,
  editChurch,
  newChurch,
  getChurchMembers
} = require("../db/queries/churchQ.js");

router.get("/", getAllChurches);

router.get("/:id/members", getChurchMembers);

router.patch("/edit/:id", editChurch);

router.delete("/delete/:id", deleteChurch);

router.get("/:id", getSingleChurch);

router.post("/", newChurch);

module.exports = router;
