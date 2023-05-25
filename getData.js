// const Koa = require("koa");
// const app = new Koa();
// const Router = require("koa-router");
// const router = new Router();
// const mysql = require("mysql");
// const { koaBody } = require("koa-body");

// app.use(koaBody());

// const pool = mysql.createPool({
//   connectionLimit: 10, // 最大连接数
//   host: "localhost",
//   port: 3306,
//   database: "test",
//   user: "root",
//   password: "123456",
// });

// router.get("/getdata", async (ctx) => {
//   const sql = `select * from user`;
//   const data = await new Promise((resolve, reject) => {
//     pool.query(sql, (error, res) => {
//       if (error) {
//         console.error("error:", error);
//         return;
//       } else {
//         resolve(res);
//       }
//     });
//   });
//   ctx.body = data;
// });

// router.post("/adddata", async (ctx) => {
//   const { id = 0, name = "empty" } = ctx.body;
//   console.log(ctx.query)
//   await new Promise((resolve, reject) => {
//     pool.query(`insert into user values(${id},'${name}')`, (error, res) => {
//       if (error) {
//         console.log("error:", error);
//         return;
//       } else {
//         resolve(res);
 
//       }
//     });
//   });
//   console.log(ctx.body)
//   ctx.body = "已经添加上了数据";
// });

// router.post("/", (ctx) => {
//     console.log(ctx.request.body); // 前端发送POST请求中在body里带过来的数据
//     ctx.body = "已经添加上了数据";
//   });

// app.use(router.routes(), router.allowedMethods());
// app.listen(3000, () => {
//   console.log("5050端口已经打开");
// });
// // var mysql = require("mysql");
// // const pool = mysql.createPool({
// //   connectionLimit: 10, // 最大连接数
// //   host: "localhost",
// //   port: 3306,
// //   database: "test",
// //   user: "root",
// //   password: "123456",
// // });
// // let queryData = function (sql, value, callback) {
// //   pool.getConnection((err, conn) => {
// //     if (err) {
// //       callback(err, null);
// //     } else {
// //       conn.query(sql, value, (err, result) => {
// //         callback(err, result);
// //         conn.release();
// //       });
// //     }
// //   });
// // };

// // module.exports = queryData;
