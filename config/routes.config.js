const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const cyclists = require("../controllers/cyclists.controller")

router.get("/", misc.home);
router.get("/cyclists/list" , cyclists.list);
router.get("/cyclists/create", cyclists.create);
router.post("/cyclists/create", cyclists.doCreate);
router.get("/cyclists/:id", cyclists.detail);
router.get("/cyclists/:id/edit", cyclists.edit);
router.post("/cyclists/:id", cyclists.doEdit);
router.post("/cyclists/:id/delete", cyclists.delete)



module.exports = router;
