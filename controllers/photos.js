const Photo = require('../models/photo');

function create (req, res) {
    const photo = new Photo(req.body);
  photo.save(function(err) {
    if (err) return res.redirect('/feed');
    res.redirect(`/feed/${photo._id}`);
  });
}

module.exports = {
    create
  };