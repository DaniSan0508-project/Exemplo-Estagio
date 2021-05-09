import User from '../model/User';

class UserController{

    getUsers(req,res){
        User.lista(res);
    };  

    getOneUser(req,res){
        const id = parseInt(req.params.id);
        User.findById(id,res);
    };

    createUser(req,res){
     
        const {email,password} = req.body;
        const user = {}
            if(email != '' && email != undefined){
                user.email = email;
                if(password != '' && password != undefined){
                    user.password = password;
                }else{
                   return res.status(400).json({err:"password inválido!"})
                }
            }else{
               return res.status(400).json({err:"email inválido!"});
            };
       
        
        User.create(user,res);
    };

    updateUser(req,res){
        const id = parseInt(req.params.id);
        const values = req.body;

        User.update(id,values,res);

    };

    deleteUser(req,res){
        const id = parseInt(req.params.id);
        User.delete(id,res)
    }
};

export default new UserController;