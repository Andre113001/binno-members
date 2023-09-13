import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SEAN_INFORMATION
}).promise();

export async function getNotes() {
    const [rows] = await connection.query("SELECT * FROM notes")
    return rows
}

export async function getAccount(account_id) {
    const [rows] = await connection.query("SELECT * FROM account WHERE account_id = ?", [account_id])
    return rows
}

export async function login() {
    const [result] = await connection.query("SELECT * FROM account")
    return result
}

export async function register(email, password, name) {
    const [result] = await connection.query(
        `INSERT INTO account (email, password, name) 
        VALUES (?, ?, ?)`,
        [email, password, name]
    )
    const account_id  = result.insertId
    return getAccount(account_id)
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