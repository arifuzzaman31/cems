import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// Simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up database path
const dbPath = path.resolve(__dirname, '../database/expenses.db');

// Enable verbose mode for debugging SQLite
sqlite3.verbose();

// Create database connection
const db = new sqlite3.Database(dbPath);

export default db;
