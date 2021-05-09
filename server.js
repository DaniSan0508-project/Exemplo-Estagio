import connection from './config/connection';
import tabelas from './config/tabelas';
import app from './app';

connection.connect(err=>{
    if(!err){
        console.log('conectado ao MySQL');
        tabelas.init(connection);
        app.listen(3333,()=>{
        console.log('servidor rodando');
});
    }else{
        console.log(err);
    };

});

