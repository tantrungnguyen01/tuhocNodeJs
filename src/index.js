const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route= require('./routes');
const db=require('./config/db');

const app = express();
const port = 3000;

//middleware trong express được gọi seting như vầy
app.use(express.urlencoded({extended:true}));
app.use(express.json());//middleware dùng cho các thư viện của javascript từ client gửi lên server  như XMLhttprequest ,axios, fetch, jquery->ajax........
//end middleware

//kết nối với database mongodb
db.connect();
// 
app.use(morgan('combined'));// là cái kiểm tra http có trả về hay không -> ::1 - - [19/Aug/2023:05:32:31 +0000] "GET /image/splatoon3_logo.png HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
app.use(express.static(path.join(__dirname,'public'))); // lấy hình
app.engine('hbs', handlebars.engine({defaultLayout:'main', extname:'.hbs'})); // dùng để làm view 
app.set('view engine', 'hbs'); // trà xuống view
app.set('views', path.join(__dirname, 'resources','views')); //trả xuống view

//Route
  route(app);
//end Route

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})