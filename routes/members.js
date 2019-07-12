const express = require("express");
const router = express.Router();
const {
  getSingleMember,
  getAllMembers,
  editMember,
  deleteMember,
  newMember
} = require("../db/queries/memberQ.js");

router.get("/", getAllMembers);

router.patch("/edit/:id", editMember);

router.delete("/delete/:id", deleteMember);

router.get("/:id", getSingleMember);

router.post("/", newMember);

module.exports = router;
