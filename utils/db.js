const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10, // 最大连接数
  host: "localhost",
  port: 3306,
  database: "test",
  user: "root",
  password: "123456",
});
var arr = [
  { id: 16, name: "panpan1" },
  { id: 17, name: "panpan2" },
  { id: 18, name: "panpan3" },
];
// 执行SQL查询
new Promise(() => {
  arr.map((item) => {
    const sql = `insert into user values(${item.id},'${item.name}')`;
    pool.query(sql, (error, res) => {
      if (error) {
        console.error("error:", error);
        return;
      } else {
        console.log("result:", res);
      }
    });
  });
}).then(() => {
  // 关闭连接池
  pool.end((error) => {
    if (error) {
      console.error("Error occurred while closing pool:", error);
    } else {
      console.log("Pool has been closed.");
    }
  });
});