import connection from '../config/connection';

class User{
    list(res){
        const sql = `SELECT * FROM users`;
        connection.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({err:"nenhum usuário encontrado"});
            };
            res.status(200).json({status:result});
        });
    };
    findById(id,res){
        const sql = `SELECT * FROM users WHERE id=${id}`;
        connection.query(sql,(err,result)=>{
            if(err){
                res.status(400).json({err:'erro'})
            }
                res.status(200).json(result);
        })
    }
    create(user,res){
        const sql = `INSERT INTO Users SET ?`
        connection.query(sql, user,(err,result)=>{
            if(err){
                res.status(400).json(err);
            };
               res.status(200).json(result);
        });
    };

    update(id,values,res){
        const sql = `UPDATE users SET ? WHERE id=?`;
        connection.query(sql,[values,id],(err,result)=>{
            if(err){
                res.status(400).json({err:err})
            };
            res.status(200).json(result)
        });


    }

    delete(id,res){
        const sql = `DELETE FROM users WHERE id=?`;
        connection.query(sql,id,(err,result)=>{
            if(err){
                res.status(400).json({err:err})
            }
            res.status(200).json(result);
        });
    };
};

export default new User;