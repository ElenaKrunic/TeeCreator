//seting up express server 
import express from 'express'; 
import * as dotenv from 'dotenv';
import cors from 'cors'; 

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ liming: "50mb" }))

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req,res) => {
    res.status(200).json({ message: "connection with dall.e"})
})

app.listen(8080, () => console.log('server started on port 8080'))