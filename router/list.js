// 专门放list的接口
const Router = require("koa-router");
const list = new Router();

list.get("/", (ctx) => {
  ctx.body = "list的首页";
});
list.get("/yinger", async (ctx) => {
  ctx.body = "婴儿";
});
list.get("/wanju", (ctx) => {
  ctx.body = "玩具";
});

module.exports = list;
