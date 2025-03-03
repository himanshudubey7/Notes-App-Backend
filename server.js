const express= require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/noteroutes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());// middleware to hanlde json req from body


app.use('/api/notes', notesRoutes);




const PORT = 5000;



app.listen(PORT, () => console.log(`server running on port ${PORT}`));