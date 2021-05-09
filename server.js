import connection from './config/connection'
import app from './app';

connection.connect(err=>{
    if(!err){
        console.log('conectado ao MySQL');
        app.listen(3333,()=>{
        console.log('servidor rodando');
});
    }else{
        console.log(err);
    };

});

