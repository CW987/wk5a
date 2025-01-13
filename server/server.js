import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString,});

app.listen(8080, () => {
    console.log("The server is running on port 8080")
});

app.get("/", (req, res) =>{
    res.json({message: "This is the root route"})
});

