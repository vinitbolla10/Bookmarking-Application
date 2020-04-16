const Tag = require("../models/tagModel");
const errorHandler = require("../helpers/dbErrorHandler");
const _ = require("lodash");
const fs = require("fs");

const create = (req, res, next) => {
    const tag = new Tag(req.body);
    //console.log(req.body);
    tag.save((err, result) => {
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
    Tag.findOneAndRemove({ _id: req.body.id }).then(() => res.json({ success: true })
    );
    /*bookmark.remove((err, deletedBookmark) => {
      if (err) {
        res.json(err);
      }
      res.json(deletedBookmark);
    });*/
};

const list = (req, res) => {
    Tag.find((err, Tags) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            });
        }

        res.json(Tags);
    }).select("_id Title Time_created Time_updated");
};

module.exports = {
    create,
    remove,
    list,
};
