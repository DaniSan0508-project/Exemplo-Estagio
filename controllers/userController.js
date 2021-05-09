import User from '../model/User';

class UserController{
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
};

export default new UserController;