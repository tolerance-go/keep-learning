import Koa from 'koa';
import koaSwagger from 'koa2-swagger-ui';
import serve from 'koa-static';

import { routes } from './routes';
import { config } from './config';

const app = new Koa();

app.use(routes);
app.use(serve('public'));
app.use(
  koaSwagger({
    routePrefix: '/api-playground',
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

export const server = app.listen(config.port);

console.log(`Server running on port ${config.port}`);
