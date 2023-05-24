// koa
const Koa = require("koa");
const app = new Koa();
const router = require('./router/index.js')

// 端口
const port = 3000;

// app.use(async (ctx) => {
//   ctx.response.body = "home";
// });

app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
