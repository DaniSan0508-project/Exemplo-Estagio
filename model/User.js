import connection from '../config/connection';

class User{
    create(user){
        const sql = `INSERT INTO Users SET ?`
        connection.query(sql, user,(erro,res)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log(res)
            }
        });
    };
};

export default new User;