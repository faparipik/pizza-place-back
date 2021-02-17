import Router from 'express';
import IngredientsRoutes from '../Modules/Ingredient/routes.js';

const router = new Router();

router.use('/ingredients', IngredientsRoutes);

export default router;
