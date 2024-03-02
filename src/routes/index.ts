import { Router } from 'express';
import { PrometheusRouter } from './prometheus-routes';

const router: Router = new Router();
router.use('/', PrometheusRouter);

export const MainRouter: Router = router;