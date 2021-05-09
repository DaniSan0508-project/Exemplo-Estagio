import {Router} from 'express';
import UserController from './controllers/userController'
const router = new Router();

router.get('/user',UserController.getUsers);
router.get('/user/:id',UserController.getOneUser);
router.post('/user',UserController.createUser);
router.put('/user/:id',UserController.updateUser);
router.delete('/user/:id',UserController.deleteUser);

export default router;