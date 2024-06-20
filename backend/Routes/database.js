const mysql = require('mysql2');
const dotenv = require('dotenv');
const { binaryString,type_,pname,desc } = require('./index');

dotenv.config();

const pool = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: 'brfrkrha05@',
  database: 'projectpool'
}).promise();


async function getNotes() {
  const [rows] = await pool.query("select * from propool");
  return rows;
}



async function bytype(type,binaryString) {
  const [rows] = await pool.query("select pname,binaryString,descr,type_ from propool where type_=? and binaryString=?", [type,binaryString]);
  console.log(rows)
  return rows;
}

async function create(pname,binaryString,desc,type){
  const result=await pool.query("insert into propool (pname,binaryString,descr,type_) values (?,?,?,?)",[pname,binaryString,desc,type])
  return result;
}
module.exports = {bytype,create};