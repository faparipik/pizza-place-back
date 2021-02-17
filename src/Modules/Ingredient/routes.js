import Router from 'express';
import { getData } from './controller.js';

const router = new Router();

router.get('/', getData);

export default router;
