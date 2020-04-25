import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const router = new Router();

const paths = {
  api: path.join(__dirname, 'api'),
};

const load = (folder = paths.api) => {
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const ps = path.join(folder, file);

    const s = fs.statSync(ps);
    const meta = path.parse(ps);
    const { name } = meta;

    if (s.isDirectory()) {
      load(ps);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { default: apiGenerator } = require(ps);
    // remove .service
    const [filename] = name.split('.');
    apiGenerator(router, '/' + encodeURIComponent(filename));
  });
};

router.get('/', async (ctx) => (ctx.body = 'hello world'));

load();

export const routes = router.routes();
