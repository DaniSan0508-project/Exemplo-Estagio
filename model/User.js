import connection from '../config/connection';

class User{
    create(user,res){
        const sql = `INSERT INTO Users SET ?`
        connection.query(sql, user,(err,result)=>{
            if(err){
                res.status(400).json(err);
            };
               res.status(200).json(result);
        });
    };
};

export default new User;