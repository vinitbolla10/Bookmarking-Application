const Bookmark = require("../models/bookmarkModel");
const errorHandler = require("../helpers/dbErrorHandler");
const _ = require("lodash");
const fs = require("fs");

const create = (req, res, next) => {
  const bookmark = new Bookmark(req.body);
  //console.log(req.body);
  bookmark.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(result);
  });
};

const remove = (req, res) => {
  //let bookmark = req.bookmark
  Bookmark.findOneAndRemove({ _id: req.body.id }).then(() => res.json({ success: true })
  );
  /*bookmark.remove((err, deletedBookmark) => {
    if (err) {
      res.json(err);
    }
    res.json(deletedBookmark);
  });*/
};

const list = (req, res) => {
  Bookmark.find((err, Bookmarks) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }

    res.json(Bookmarks);
  });
};

module.exports = {
  create,
  remove,
  list,
};
