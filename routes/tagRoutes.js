const express = require("express");
const tagCtrl = require("../controllers/tagController");
const router = express.Router();

router.route("/api/tag/addTag").post(tagCtrl.create);

router.route("/api/tag/remove").delete(tagCtrl.remove);

router.route("/api/tag/list").get(tagCtrl.list);

module.exports = router;
