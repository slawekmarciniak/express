const express = require("express");
const router = express.Router();

/* GET news page. */
router.get("/", (req, res) => {
  res.render("admin", { title: "Admin" });
});

module.exports = router;
