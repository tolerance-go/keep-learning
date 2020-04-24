import Koa from 'koa';

import { routes } from './routes';
import { config } from './config';

const app = new Koa();

app.use(routes);

export const server = app.listen(config.port);

console.log(`Server running on port ${config.port}`);
