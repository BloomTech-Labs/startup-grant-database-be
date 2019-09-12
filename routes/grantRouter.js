const router = require("express").Router();

// Get all grants
router.get("/", (req, res) => {
  res.status(200).json({ message: "Here are the grants!" });
});

module.exports = router;
