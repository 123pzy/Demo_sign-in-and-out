const Router = require("koa-router");
const router = new Router();
const loginRouter = require("./login");
const registerRouter = require("./register");

router.get("/", (ctx) => {
  ctx.body = "这是首页";
});

router.use("/login", loginRouter.routes(), loginRouter.allowedMethods());
router.use('/register',registerRouter.routes(),registerRouter.allowedMethods())

module.exports = router;
