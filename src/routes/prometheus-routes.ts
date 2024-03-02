import { Router, Response, Request, NextFunction } from 'express';
import { list_metrics } from '../controller/metrics';
import { register } from 'prom-client';

const router: Router = new Router();

router.get('/metrics', async (request: Request, response: Response, next: NextFunction) => {
    response.set('Content-Type', register.contentType);
    let metrics = await list_metrics();
    response.send(metrics);
})
export const PrometheusRouter: Router = router