import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectToDatabase } from "./src/services/database.service"
import { router } from './src/routes/users.routes'

const app: Express = express();
const port = process.env.PORT;



connectToDatabase().then((result) => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log("Error", err);
});

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes
app.use('/user', router)


app.get('/', (req: Request, res: Response) => {
    console.log("Hello");
    res.send('Express + TypeScript Server');
});

