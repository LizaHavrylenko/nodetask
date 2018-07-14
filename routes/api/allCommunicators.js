const router = require("express").Router();
const allCommunicatorsService = require("../../services/allCommunicators");
 
 
router.get("/:id", (req, res, next) => {
   
  allCommunicatorsService.getAllCommunicators(req.params.id, (err, data) => {
    if (!err) {
      res.data = data; 
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;