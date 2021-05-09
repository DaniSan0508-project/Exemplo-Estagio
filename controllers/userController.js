import User from '../model/User';

class UserController{
    createUser(req,res){
        let {email,passsword} = req.body
        const user = req.body;

        User.create(user)
    };
};

export default new UserController;