const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const adminRoute = require('./routes/admin')
const counselorRoute = require('./routes/counselor')
const refreshRoute = require('./routes/refresh');
const paymentRoute = require('./routes/payment');
const messageRoute = require('./routes/message');
const conversationRoute = require('./routes/conversation');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { application } = require('express');

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL , ()=>{
    console.log('connected to database');
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("common"))
app.use(cors())

//routes  
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/admin',adminRoute);
app.use('/api/counselor',counselorRoute);
app.use('/api/refresh', refreshRoute);
app.use('/api/payment',paymentRoute);
app.use('/api/message', messageRoute);
app.use('/api/conversation', conversationRoute);

app.get('/',(req,res)=>{
    res.send('welcome to homepage');
})

app.listen(4000,()=>{
    console.log('Backend server started');
})