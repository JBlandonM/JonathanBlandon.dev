var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./pages/index');
});
router.get("/works",(req,res)=>{
  try {
    res.render("./partials/works")
  } catch (error) {
    
  }
})
router.get("/skills",(req,res)=>{
  try {
    res.render("./partials/skills")
  } catch (error) {
    
  }
})
router.get("/contact",(req,res)=>{
  try {
    res.render("./partials/contact")
  } catch (error) {
    
  }
})
module.exports = router;
