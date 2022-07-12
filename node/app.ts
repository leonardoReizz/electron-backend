
import express from 'express'
import { routes } from './routes/routes'
import cors from "cors"
import bodyParser from 'body-parser'
import { Connection } from './components/db/connection'
import { Pool } from 'mysql'
import { resolveSoa } from 'dns'
class App {
    public express: express.Application

    constructor() {
        const dbCreate = new Connection().createDatabase();
       
        this.express = express()
        this.middlewares()
        this.routes()
        this.createDatabase(dbCreate)
    }

    private middlewares () : void {
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    } 

    private routes () : void {
        this.express.use(routes)
    }

    private async createDatabase(dbCreate: Pool) : Promise<void> {
        let query = "CREATE DATABASE IF NOT EXISTS systemsales";
        await new Promise((resolve, reject) => {
            dbCreate.query(query,(err,result)=>{
                if(err)
                    reject(err);
                resolve(result);
            })
        });
        dbCreate.end();
        const db = new Connection().create();
        this.createTables(db);
    }   

    private async createTables (db: Pool) : Promise<void> {
        let query = "CREATE TABLE IF NOT EXISTS products (id int auto_increment, name varchar(52), barcode varchar(16), puchasePrice float, saleValue float, imgUrl varchar(512), createdAt varchar(32), updatedAt varchar(32), primary key (id) )";
        await new Promise((resolve, reject)=> {
            db.query(query, ((err,  result)=> {
                if(err)
                    reject(err)
                resolve(result)
            }))
        })
        query = "CREATE TABLE IF NOT EXISTS inventory (id int auto_increment, id_product varchar(52), amount int, primary key (id) )";
        await new Promise((resolve, reject)=> {
            db.query(query, ((err,  result)=> {
                if(err)
                    reject(err)
                resolve(result)
            }))
        })
        
    }


    
}

export default new App().express    

