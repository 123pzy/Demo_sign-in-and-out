// 专门放home的接口

const Router = require("koa-router");
const home = new Router();

home.get("/banner", async (ctx) => {
  ctx.body = "轮播图";
});
home.get("/footer", (ctx) => {
  ctx.body = "底部";
});

module.exports = home;
