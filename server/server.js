import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString,});
