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

app.get("/comments", async (req, res) => {
    const query = await db.query(`SELECT * FROM workout_diary`);
    await res.json(query.rows);
});

app.post("/new-data", async(req, res) =>{
    console.log("Request body:", req.body);
    const data = req.body;
    const query = await db.query(`
        INSERT INTO workout_diary (date, my_note, exercise, sets, reps, weight) 
        VALUES($1, $2, $3, $4, $5, $6)`, 
        [data.formValues.date, data.formValues.comment, data.formValues.exercise, data.formValues.sets, data.formValues.reps, data.formValues.weight]); 
    await res.json({
        message: "The data was added successfully", 
        data: query.rows})
});