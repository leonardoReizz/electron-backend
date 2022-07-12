import mysql from 'mysql'
class Connection {
    create() : mysql.Pool {
        const db =  mysql.createPool({
            host: "localhost",
            port: 3306,
            user: "sqluser",
            password: "password",
            database: "systemsales"
        })
        return db
    }
    

    createDatabase() : mysql.Pool{
        const db =  mysql.createPool({
            host: "localhost",
            port: 3306,
            user: "sqluser",
            password: "password",
        })
        return db
    }
}


export { Connection }