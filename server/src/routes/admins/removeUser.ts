import express from 'express';
import removeUser from '../../controllers/admins/removeUserController';

const router = express.Router();

router.delete('/users', removeUser);

export default router;