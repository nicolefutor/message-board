var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Obi-Wan Kenobi",
    added: new Date()
  },
  {
    text: "General Kenobi, you are a bold one",
    user: "General Grievous",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board" });
});

router.post("/new", (req, res) => {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()})
    res.redirect('/')
});

module.exports = router;
