class Tabelas{
    init(connection){
        this.connection = connection;
        this.createUserTable();
    };

    createUserTable(){
        const sql = `CREATE TABLE IF NOT EXISTS Users (
            id int NOT NULL AUTO_INCREMENT, 
            email varchar(100) NOT NULL, 
            password varchar(100) NOT NULL, 
            PRIMARY KEY(id))`

            this.connection.query(sql, (err)=>{
                if(err){
                    console.log(err)
                }
                console.log('Tabela Users criada com sucesso');
            });
    };
};
export default new Tabelas;