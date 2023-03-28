import express from "express";
import bodyParser from "body-parser";
import userseRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userseRoutes);

app.get('/', (req, res) => {res.send("Hello");});

app.listen(PORT, () => console.log(`Server running on local port:${PORT}`));
