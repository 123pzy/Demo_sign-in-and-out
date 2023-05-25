const Router = require("koa-router");
const registerRouter = new Router();
const queryData = require("../db");
const getUsersInfo = require("../utils/getInfo");

// 用户注册路由:
registerRouter.post("/", async (ctx) => {
  const { username, password } = ctx.request.body;
  // 先获取users数据库中的数据:
  await getUsersInfo(`select * from users where username = "${username}"`).then(
    (res) => {
      // 判断用户名是否已经注册:
      // 如果已经注册:
      if (res.length !== 0) {
        ctx.body = "用户名重复";
        console.log("用户名重复");
        // 如果没注册:
      } else {
        const sql = `insert into users (username,password) values ('${username}',${password})`;
        const res = new Promise((reslove, reject) => {
          queryData(sql, (error, res) => {
            if (error) {
              console.log("error:", error);
              return;
            } else {
              reslove(res);
            }
          });
        });
        ctx.body = "注册成功!";
      }
    }
  );
});

module.exports = registerRouter;
