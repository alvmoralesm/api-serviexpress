if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const oracledb = require("oracledb");

cns = {
  user: process.env.BD_USER,
  password: process.env.BD_PW,
  connectString: `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = ${process.env.BD_HOST})(PORT = ${process.env.BD_PORT}))(CONNECT_DATA =(SID= ORCL)))`,
};

async function Open(sql, binds, autoCommit) {
  let cnn = await oracledb.getConnection(cns);
  let result = await cnn.execute(sql, binds, { autoCommit });
  cnn.release();
  return result;
}

exports.Open = Open;
