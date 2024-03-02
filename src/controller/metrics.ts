import promClient from 'prom-client';
import { check_url } from '../methods/url_operations';


const register = new promClient.Registry();

const prometheusHealthMetric = new promClient.Gauge({
    name: "website_health",
    help: "Get the website's health",
    labelNames: ["status","method"],
    registers: [register]
})
const list_metrics = async () => {
    const url_check = (await check_url(`https://www.google.com`));
    prometheusHealthMetric.labels(`status`,`method`).set(url_check);
    register.setDefaultLabels({
        app: "Monitoring",
    })
    return register.metrics();
};
list_metrics();
export {list_metrics};