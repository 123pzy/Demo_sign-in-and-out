// koa-router
const Router = require("koa-router");
const router = new Router();
const list = require("./list");
const home = require('./home')

router.get("/home", (ctx) => {
  ctx.body = "首页";
});

// router.use()
router.use("/list", list.routes(), list.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());
router.redirect('/','/home')

module.exports = router;
