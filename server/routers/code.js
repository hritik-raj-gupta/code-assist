const express=require("express")
const code = require("../controllers/code")
const router=express.Router()

router.route("/code").post(code)

module.exports=router