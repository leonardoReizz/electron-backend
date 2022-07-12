import { Sale } from "../Model/Sale";
import { Connection } from "../../db/connection";
import { Response } from "express";


class SalesRepository {
    
    async create (data: Sale) {
        let sqlInsert = 'INSERT INTO sales SET ?'
        const db = new Connection().create()
        const sale = new Sale()
        Object.assign( sale, data )  

        const result = await new Promise(( resolve,reject ) =>
            db.query( sqlInsert,[sale], ( err, result ) => {
                if( err ) {
                    console.log( err.message )
                    reject( err )
                }
                resolve(result)
            }
        ))
        db.end()
        return result
    }
    
    async delete (id: number) {
        let sqlDelete = `delete from sales where id = ${id}`
        const db = new Connection().create()

        const result = await new Promise(( resolve, reject ) => 
            db.query( sqlDelete, ( err, result ) => {
                if( err )
                    reject( err )

                resolve( result )
            }
        ))
        db.end()
        return result
    }

    async update (data: Sale, id: number) {
        let sqlUpdate = 'UPDATE sales SET ? WHERE id = ?';
        data.updateAt = new Date()
        const db = new Connection().create();

        const result = new Promise(( resolve, reject ) => 
            db.query( sqlUpdate,[data, id], ( err, result ) => {
                if( err )
                    reject( err );
                
                resolve( result );
                }
            ))
            db.end();
            return result;
        }

    async list () {
        let sqlList = `SELECT * FROM sales`
        const db = new Connection().create()
        
        const result = new Promise(( resolve, reject ) => 
            db.query( sqlList, ( err, result ) =>{
            if( err )
                reject( err )

            resolve( result )
            }
        ))
        db.end()
        return result
    }

    async findById (id: number) {
        let sqlList = `SELECT * FROM sales WHERE id = ?`
        const db = new Connection().create()
        
        const result = await new Promise(( resolve, reject ) =>  
        db.query(sqlList,[id], ( err, result ) => {
            if( err )
                reject( err )
            resolve( result )
            }
        ))
        db.end()
        return result
    }


}

export { SalesRepository }