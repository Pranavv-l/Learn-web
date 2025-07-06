import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

db.exec(`
        CREATE TABLE USERS(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        USERNAME TEXT UNIQUE,
        PASSWORD TEXT
        )
    `)

db.exec(`
    CREATE TABLE TODOS(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_ID INTEGER,
    TASK TEXT ,
    COMPLETED BOOLEAN DEFAULT 0,
    FOREIGN KEY(USER_ID) REFERENCES USERS(ID)
    ) 
`)
export default db