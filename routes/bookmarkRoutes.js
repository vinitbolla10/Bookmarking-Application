const express = require("express");
const bookmarkCtrl = require("../controllers/bookmarkController");
const router = express.Router();

router.route("/api/bookmark/addBookmark").post(bookmarkCtrl.create);

router.route("/api/bookmark/remove").delete(bookmarkCtrl.remove);

router.route("/api/bookmark/list").get(bookmarkCtrl.list);

module.exports = router;
