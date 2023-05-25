const Router = require("koa-router");
const loginRouter = new Router();
const getUsersInfo = require("../utils/getInfo");
const { get } = require("./login");

loginRouter.get("/", async (ctx) => {
  const { username, password } = ctx.query;
  const result = await getUsersInfo(
    `select * from users where username = '${username}'`
  );
  console.log(result);
  if (result.length == 0) {
    ctx.body = "您似乎还没注册,请检查用户名是否正确!";
  } else {
    await getUsersInfo(
      `select password from users where username = '${username}'`
    ).then((res) => {
      console.log(res[0].password);
      console.log(password);
      if (res[0].password == password) {
        ctx.body = "登陆成功!";
        console.log("登陆成功~");
      } else {
        ctx.body = "密码错误!";
      }
    });
  }
});

module.exports = loginRouter;
/**.then(
    (result) => {
      if (result.length == 0) {
        ctx.body = "您似乎还没注册,请检查用户名是否正确!";
      } else {
        new Promise((reslove, reject) => {
          reslove(
            getUsersInfo(
              `select password from users where username = '${username}'`
            )
          );
        }).then((res) => {
          console.log(res);
          if (res[0].password == password) {
            ctx.body = "登陆成功!";
            console.log("登陆成功");
          }
        });
      }
    }
  ); */
