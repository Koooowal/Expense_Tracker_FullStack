const express = require('express');
const cors = require('cors');
const app = express();

require("dotenv").config()
const { db } = require('./db/db');
const{readdirSync} = require('fs');

const PORT=process.env.PORT

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));


app.get('/', (req, res) => {
    res.send('Hello World')
})

const server=()=>{
    db()
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}

server()