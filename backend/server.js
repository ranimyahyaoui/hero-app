const express = require('express');//nimporti express
const cors = require('cors');//bch njm nab3th des requetes min front li back
require('./config/connect.js');//3ibara code mt3 connect kol ghadika

const app = express();//nsna3 app
app.use(express.json());//t9bl data de type json
app.use(cors());//3tit enable li nes kol ya3ni ay had ki ydaber lien backend ynjm ystghlha ,dangeruex!!!
const luffyRoutes = require('./routes/luffy');//nimportiw les routes
app.use('/luffy', luffyRoutes);//ki yabda 3ndk/luffy hezna li luffyRoutes


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});//app bch t5dem 3ala port 3000