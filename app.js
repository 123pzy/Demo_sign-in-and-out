// koa
const Koa = require("koa");
const router = require("./router/index.js");
const { koaBody } = require("koa-body");
const port = 3000;
const app = new Koa();
app.use(koaBody());

app.use(router.routes(), router.allowedMethods());
app.listen(port, () => {
  console.log(`${port}端口已经打开`);
});
