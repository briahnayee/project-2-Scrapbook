const Movie = require('../models/photo');

module.exports = {
  create
};

function create(req, res) {
  Photo.findById(req.params.id, function(err, photo) {
    photo.comments.push(req.body);
    photo.save(function(err) {
      res.redirect(`/singlePic/${photo._id}`);
    });
  });
}