import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')
db.exec('PRAGMA foreign_keys = ON;') 

db.exec(`
        CREATE TABLE USERS(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
        )
    `)

db.exec(`
    CREATE TABLE TODOS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task TEXT ,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES USERS(id)
    ) 
`)
export default db