import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getNotes() {
    const [rows] = await connection.query("SELECT * FROM notes")
    return rows
}

export async function getNote(id) {
    const [rows] = await connection.query(`
    SELECT * FROM notes WHERE id = ?
    `, [id])
    return rows
}

export async function createNote(title, contents) {
    const [result] = await connection.query(`
    INSERT INTO notes (title, contents) 
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId
    return getNote(id)
}

// const notes = await createNote('test3', 'test3')
// const run = await getNote(3)
// console.log()