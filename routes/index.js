var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEST',message: messages,url: req.get('host')});
});

router.get('/new', function(req, res, next) {
  console.log("ok")
  res.render('new', { title: 'TEST',message: messages});
});

router.post("/new",(req, res, next)=>{
  let mes = req.body
  messages.push({text:mes.text,user:mes.name,added: new Date()})
  res.redirect('/')
})


module.exports = router;
