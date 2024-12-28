const express = require('express');
const bodyparser = require('body-parser')
const connectDB = require('./src/config/db')
const TaskRouter = require('./src/routes/taskRoutes')

const app = express()
connectDB();
app.use(bodyparser.json())

app.use('/api', TaskRouter);

app.listen(3000,()=> {
    console.log("le serveur est sur le port 3000");
})